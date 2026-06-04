"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, MapPin, Navigation, Hotel, Car, Star, X, Filter, Map as MapIcon, SlidersHorizontal, Info, ChevronDown } from 'lucide-react';
import axios from 'axios';
import { debounce } from 'lodash';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = ["places"];

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('lodging'); // lodging, taxi_stand, car_rental
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);
  
  // Advanced Filters
  const [radius, setRadius] = useState(50000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('prominence');
  const [openNow, setOpenNow] = useState(false);

  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const suggestionRef = useRef<HTMLDivElement>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchSuggestions = useMemo(() => debounce(async (val: string) => {
    if (val.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(`${API_URL}/search/suggest`, {
        params: { input: val }
      });
      setSuggestions(response.data.predictions || []);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  }, 300), []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    fetchSuggestions(val);
  };

  const handleSearch = async (query = input, overrideParams: any = {}) => {
    setLoading(true);
    setShowResults(true);
    try {
      const loc = userLocation ? `${userLocation.lat},${userLocation.lng}` : '26.7271,88.3953';
      const response = await axios.get(`${API_URL}/search/places`, {
        params: {
          location: loc,
          keyword: query,
          type: category,
          radius: overrideParams.radius || radius,
          minRating: overrideParams.minRating !== undefined ? overrideParams.minRating : minRating,
          sortBy: overrideParams.sortBy || sortBy,
          openNow: overrideParams.openNow !== undefined ? overrideParams.openNow : openNow
        }
      });
      setResults(response.data.results || []);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSuggestion = async (suggestion: any) => {
    setInput(suggestion.description);
    setShowSuggestions(false);
    
    setLoading(true);
    setShowResults(true);
    
    try {
      const detailsRes = await axios.get(`${API_URL}/search/details`, {
        params: { place_id: suggestion.place_id }
      });
      
      const location = detailsRes.data.result.geometry.location;
      const locStr = `${location.lat},${location.lng}`;
      
      const response = await axios.get(`${API_URL}/search/places`, {
        params: {
          location: locStr,
          keyword: suggestion.structured_formatting.main_text,
          type: category,
          radius: 20000,
          minRating,
          sortBy,
          openNow
        }
      });

      setResults(response.data.results || []);
    } catch (error) {
      console.error('Error fetching suggestion details:', error);
      handleSearch(suggestion.description);
    } finally {
      setLoading(false);
    }
  };

  const requestGeolocation = () => {
    setShowPrivacyNotice(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(newLoc);
          handleSearch(input, { location: `${newLoc.lat},${newLoc.lng}` });
        },
        (error) => {
          console.error('Geolocation error:', error);
          alert('Could not get your location. Please search manually.');
        }
      );
    }
  };

  const mapCenter = useMemo(() => {
    if (userLocation) return userLocation;
    if (results.length > 0 && results[0].geometry) return results[0].geometry.location;
    return { lat: 26.7271, lng: 88.3953 };
  }, [userLocation, results]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 relative z-50">
      {/* Category Toggles */}
      <div className="flex gap-4 mb-4 justify-center">
        <button 
          onClick={() => { setCategory('lodging'); if(showResults) handleSearch(input, {type: 'lodging'}); }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all shadow-sm ${category === 'lodging' ? 'bg-primary text-white' : 'bg-white/80 text-text-secondary hover:bg-white'}`}
        >
          <Hotel size={18} />
          <span className="font-semibold">Hotels & Stays</span>
        </button>
        <button 
          onClick={() => { setCategory('taxi_stand'); if(showResults) handleSearch(input, {type: 'taxi_stand'}); }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all shadow-sm ${category === 'taxi_stand' ? 'bg-primary text-white' : 'bg-white/80 text-text-secondary hover:bg-white'}`}
        >
          <Car size={18} />
          <span className="font-semibold">Cabs & Cars</span>
        </button>
      </div>

      <div className="relative group shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl overflow-visible bg-white p-2 flex items-center border border-slate-200">
        <div className="pl-6 text-primary">
          <Search size={24} />
        </div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onFocus={() => input.length >= 3 && setShowSuggestions(true)}
          placeholder={category === 'lodging' ? "Where do you want to stay?" : "Where do you need a ride?"}
          className="flex-1 px-6 py-6 text-lg outline-none text-text-primary placeholder-slate-400 font-medium bg-transparent"
        />
        
        <button 
          onClick={() => setShowPrivacyNotice(true)}
          className="p-3 text-text-light hover:text-primary transition-colors rounded-2xl hover:bg-slate-50 flex items-center gap-2 mr-2"
          title="Use my location"
        >
          <Navigation size={20} />
          <span className="hidden lg:inline text-xs font-bold uppercase tracking-widest">Near me</span>
        </button>

        <button 
          onClick={() => handleSearch()}
          className="btn-primary py-4 px-10 text-sm"
        >
          Discover
        </button>

        {/* Autocomplete Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div 
            ref={suggestionRef}
            className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 z-[60]"
          >
            {suggestions.map((s) => (
              <button
                key={s.place_id}
                onClick={() => handleSelectSuggestion(s)}
                className="w-full text-left px-8 py-5 hover:bg-slate-50 flex items-start gap-5 transition-colors border-b border-slate-50 last:border-0 group"
              >
                <MapPin className="text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <div className="font-semibold text-text-primary text-lg">{s.structured_formatting.main_text}</div>
                  <div className="text-sm text-text-light">{s.structured_formatting.secondary_text}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Privacy Notice Modal */}
      {showPrivacyNotice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-md shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Navigation className="text-[#15803d]" size={32} />
            </div>
            <h3 className="text-2xl font-display font-black text-gray-900 mb-4">Location Permission</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              To show you the best hotels and cabs nearby, we need your current location. Your data is used only for this search and is never stored permanently.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowPrivacyNotice(false)}
                className="flex-1 px-6 py-4 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={requestGeolocation}
                className="flex-1 px-6 py-4 rounded-xl font-bold bg-[#15803d] text-white hover:bg-[#166534] transition-all shadow-lg shadow-green-100"
              >
                Allow Access
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Overlay */}
      {showResults && (
        <div className="mt-6 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
          {/* Results Header */}
          <div className="p-6 border-b border-gray-100 flex flex-wrap justify-between items-center bg-gray-50/30 gap-4">
            <div>
              <h3 className="text-xl font-display font-black text-gray-900">
                {loading ? 'Discovering...' : `Found ${results.length} ${category === 'lodging' ? 'stays' : 'rides'}`}
              </h3>
              <p className="text-xs text-gray-500 font-medium">Near your selected location</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all font-bold text-sm ${showFilters ? 'bg-[#15803d] text-white border-[#15803d]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#15803d]'}`}
              >
                <SlidersHorizontal size={16} />
                Filters
                <ChevronDown size={14} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <button 
                onClick={() => setShowMap(!showMap)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all font-bold text-sm ${showMap ? 'bg-[#15803d] text-white border-[#15803d]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#15803d]'}`}
              >
                <MapIcon size={16} />
                {showMap ? 'Hide Map' : 'Show Map'}
              </button>
              
              <button onClick={() => setShowResults(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors ml-2 text-gray-400">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="p-6 bg-white border-b border-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-in slide-in-from-top-2 duration-300">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Distance Radius</label>
                <select 
                  value={radius} 
                  onChange={(e) => { setRadius(Number(e.target.value)); handleSearch(input, { radius: Number(e.target.value) }); }}
                  className="w-full p-3 rounded-xl border border-gray-100 bg-gray-50 text-sm font-bold outline-none focus:border-[#15803d]"
                >
                  <option value={5000}>Within 5 km</option>
                  <option value={10000}>Within 10 km</option>
                  <option value={20000}>Within 20 km</option>
                  <option value={50000}>Within 50 km</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Minimum Rating</label>
                <div className="flex gap-2">
                  {[0, 3, 4, 4.5].map((r) => (
                    <button 
                      key={r}
                      onClick={() => { setMinRating(r); handleSearch(input, { minRating: r }); }}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${minRating === r ? 'bg-[#15803d] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                    >
                      {r === 0 ? 'Any' : `${r}+`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Sort By</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => { setSortBy(e.target.value); handleSearch(input, { sortBy: e.target.value }); }}
                  className="w-full p-3 rounded-xl border border-gray-100 bg-gray-50 text-sm font-bold outline-none focus:border-[#15803d]"
                >
                  <option value="prominence">Best Match</option>
                  <option value="rating">Top Rated</option>
                  <option value="distance">Nearest First</option>
                </select>
              </div>

              <div className="flex items-end pb-1">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={openNow}
                      onChange={(e) => { setOpenNow(e.target.checked); handleSearch(input, { openNow: e.target.checked }); }}
                    />
                    <div className={`w-12 h-6 rounded-full transition-colors ${openNow ? 'bg-[#15803d]' : 'bg-gray-200'}`}></div>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${openNow ? 'translate-x-6' : ''}`}></div>
                  </div>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-[#15803d]">Open Now</span>
                </label>
              </div>
            </div>
          )}

          <div className={`flex flex-col ${showMap ? 'md:flex-row' : ''} min-h-[500px]`}>
            {/* Results List */}
            <div className={`p-6 overflow-y-auto max-h-[700px] ${showMap ? 'md:w-1/2' : 'w-full'} grid grid-cols-1 ${!showMap ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
              {loading ? (
                <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-400">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#15803d] border-t-transparent mb-4"></div>
                  <p className="font-bold tracking-tight">Curating the finest experiences for you...</p>
                </div>
              ) : results.length > 0 ? (
                results.map((place) => (
                  <div 
                    key={place.place_id} 
                    className={`group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all flex flex-col cursor-pointer ${place.isLocal ? 'ring-2 ring-[#15803d] ring-offset-2' : ''}`}
                    onClick={() => { setSelectedPlace(place); setShowMap(true); }}
                  >
                    <div className="h-48 bg-gray-100 relative overflow-hidden">
                      {place.isLocal ? (
                        <div className="absolute top-4 left-4 z-10 bg-[#15803d] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                          Tourex Exclusive
                        </div>
                      ) : null}
                      
                      {place.photos ? (
                        <img 
                          src={place.photos[0].isLocal ? place.photos[0].photo_reference : `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${place.photos[0].photo_reference}&key=${GOOGLE_MAPS_API_KEY}`}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          {category === 'lodging' ? <Hotel size={48} /> : <Car size={48} />}
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-display font-black text-gray-900 line-clamp-1 leading-tight">{place.name}</h4>
                        {place.rating && (
                          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg shrink-0">
                            <Star size={12} className="fill-yellow-400 text-yellow-400" />
                            <span className="text-[11px] font-black text-[#15803d]">{place.rating}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-4 font-medium">{place.vicinity || place.formatted_address}</p>
                      
                      <div className="mt-auto flex justify-between items-center">
                        {place.isLocal && place.price ? (
                          <span className="text-sm font-black text-[#15803d]">₹{place.price}<span className="text-[10px] font-medium text-gray-400 ml-1">onwards</span></span>
                        ) : (
                          <span className={`text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest ${place.opening_hours?.open_now ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'}`}>
                            {place.opening_hours?.open_now ? 'Open Now' : 'Check Times'}
                          </span>
                        )}
                        <button className="text-xs font-black text-[#15803d] hover:bg-green-50 px-4 py-2 rounded-xl transition-colors">Details</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Info className="text-gray-300" size={32} />
                  </div>
                  <p className="text-xl font-display font-black text-gray-900 mb-2">No results found</p>
                  <p className="text-gray-500 text-sm max-w-xs mx-auto">Try adjusting your filters or searching for a broader area in North Bengal.</p>
                </div>
              )}
              <div className="col-span-full py-4 text-center text-[10px] text-gray-400 flex items-center justify-center gap-2">
                <span>Google API integration active</span>
                <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                <span>Powered by Google</span>
              </div>
            </div>

            {/* Interactive Map View */}
            {showMap && (
              <div className="md:w-1/2 h-[500px] md:h-auto border-l border-gray-100 relative">
                {!isLoaded ? (
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                    <p className="text-sm font-bold text-gray-400 animate-pulse">Loading interactive map...</p>
                  </div>
                ) : (
                  <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={mapCenter}
                    zoom={13}
                    options={{
                      disableDefaultUI: false,
                      styles: [
                        { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }
                      ]
                    }}
                  >
                    {results.map((place) => (
                      place.geometry && (
                        <Marker
                          key={place.place_id}
                          position={place.geometry.location}
                          onClick={() => setSelectedPlace(place)}
                          icon={place.isLocal ? {
                            url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                          } : undefined}
                        />
                      )
                    ))}

                    {selectedPlace && selectedPlace.geometry && (
                      <InfoWindow
                        position={selectedPlace.geometry.location}
                        onCloseClick={() => setSelectedPlace(null)}
                      >
                        <div className="p-2 max-w-[200px]">
                          <h5 className="font-black text-sm mb-1">{selectedPlace.name}</h5>
                          <p className="text-[10px] text-gray-500 mb-2">{selectedPlace.vicinity}</p>
                          {selectedPlace.isLocal && (
                            <div className="text-[10px] font-bold text-[#15803d]">Tourex Partner Property</div>
                          )}
                        </div>
                      </InfoWindow>
                    )}
                  </GoogleMap>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/50 text-[10px] font-black uppercase tracking-widest text-gray-800">
                    Live View: {input || 'Nearby'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
