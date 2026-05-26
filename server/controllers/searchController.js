const axios = require('axios');
const prisma = require('../utils/prisma');

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

exports.suggest = async (req, res) => {
  const { input, sessiontoken } = req.query;
  
  if (!input) {
    return res.status(400).json({ error: 'Input is required' });
  }

  try {
    // Check cache
    const cacheKey = `suggest:${input}`;
    const cached = await prisma.searchCache.findUnique({
      where: { query: cacheKey }
    });

    if (cached && cached.expiresAt > new Date()) {
      return res.json(JSON.parse(cached.results));
    }

    const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
      params: {
        input,
        key: GOOGLE_MAPS_API_KEY,
        sessiontoken,
        location: '26.7271,88.3953', // Siliguri
        radius: 500000 // 500km
      },
      headers: {
        'Referer': 'http://localhost:3000'
      }
    });

    console.log(`Autocomplete [${input}] Status:`, response.data.status);
    if (response.data.error_message) {
      console.error('Autocomplete Error Message:', response.data.error_message);
    }

    // Cache results for 30 days
    await prisma.searchCache.upsert({
      where: { query: cacheKey },
      update: {
        results: JSON.stringify(response.data),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      },
      create: {
        query: cacheKey,
        results: JSON.stringify(response.data),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Autocomplete Error:', error);
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
};

exports.searchPlaces = async (req, res) => {
  const { location, radius, type, keyword, minRating, sortBy, openNow } = req.query;

  try {
    const cacheKey = `places:text:${location}:${radius}:${type}:${keyword}:${minRating}:${sortBy}:${openNow}`;
    const cached = await prisma.searchCache.findUnique({
      where: { query: cacheKey }
    });

    if (cached && cached.expiresAt > new Date()) {
      return res.json(JSON.parse(cached.results));
    }

    // 1. Fetch Local Packages (Boosted results)
    const localPackages = await prisma.package.findMany({
      where: {
        OR: [
          { location: { contains: keyword || '', lte: 'insensitive' } },
          { category: { contains: type === 'lodging' ? 'Stay' : 'Transport', lte: 'insensitive' } }
        ]
      },
      take: 5
    });

    // 2. Build Google Query
    let query = keyword || '';
    if (type === 'lodging') {
      query += ' hotels homestays resorts';
    } else if (type === 'taxi_stand' || type === 'car_rental') {
      query += ' car rental taxi service cab';
    }

    const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: {
        query: query.trim(),
        location,
        radius: radius || 50000,
        key: GOOGLE_MAPS_API_KEY
      },
      headers: {
        'Referer': 'http://localhost:3000'
      }
    });

    let results = response.data.results || [];

    // 3. Apply Filters (minRating, openNow)
    if (minRating) {
      results = results.filter(p => p.rating >= parseFloat(minRating));
    }
    if (openNow === 'true') {
      results = results.filter(p => p.opening_hours?.open_now);
    }

    // 4. Apply Sorting (Google doesn't sort by rating in Text Search)
    if (sortBy === 'rating') {
      results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    // 5. Merge Local Data (at the top)
    const mergedResults = [
      ...localPackages.map(pkg => ({
        place_id: `local_${pkg.id}`,
        name: `[TOUREX] ${pkg.title}`,
        vicinity: pkg.location,
        rating: 5.0, // Featured
        user_ratings_total: 100,
        isLocal: true,
        price: pkg.price,
        photos: pkg.images ? JSON.parse(pkg.images).map(url => ({ photo_reference: url, isLocal: true })) : null
      })),
      ...results
    ];

    const finalResponse = { ...response.data, results: mergedResults };

    // Cache results for 30 days
    await prisma.searchCache.upsert({
      where: { query: cacheKey },
      update: {
        results: JSON.stringify(finalResponse),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      },
      create: {
        query: cacheKey,
        results: JSON.stringify(finalResponse),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      }
    });

    res.json(finalResponse);
  } catch (error) {
    console.error('Places Search Error:', error);
    res.status(500).json({ error: 'Failed to search places' });
  }
};

exports.getPlaceDetails = async (req, res) => {
  const { place_id, sessiontoken } = req.query;

  try {
    const cacheKey = `details:${place_id}`;
    const cached = await prisma.searchCache.findUnique({
      where: { query: cacheKey }
    });

    if (cached && cached.expiresAt > new Date()) {
      return res.json(JSON.parse(cached.results));
    }

    const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        place_id,
        sessiontoken,
        fields: 'geometry,name,formatted_address,rating,user_ratings_total,photos,opening_hours,vicinity',
        key: GOOGLE_MAPS_API_KEY
      },
      headers: {
        'Referer': 'http://localhost:3000'
      }
    });

    console.log(`Place Details [${place_id}] Status:`, response.data.status);

    // Cache results for 30 days
    await prisma.searchCache.upsert({
      where: { query: cacheKey },
      update: {
        results: JSON.stringify(response.data),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      },
      create: {
        query: cacheKey,
        results: JSON.stringify(response.data),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Place Details Error:', error);
    res.status(500).json({ error: 'Failed to fetch place details' });
  }
};
