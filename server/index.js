require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// trust proxy for ngrok/railway
app.set('trust proxy', 1);

// Specialized Rate Limiters
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // Strict limit for login
  message: { error: 'Too many login attempts, please try again after 15 minutes.' }
});

const webhookLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60, // 1 request per second average
  message: { error: 'Webhook rate limit exceeded.' }
});

// Production Middlewares
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      connectSrc: ["'self'"]
    }
  }
}));
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('combined')); 
app.use(express.json({ limit: '10kb' })); 

// Basic Health Route
app.get('/', (req, res) => {
  res.send('Tourex AI Support API is running...');
});

// Routes with specific limiting
app.use('/api/admin/login', loginLimiter);
app.use('/api/webhook', webhookLimiter);
app.use('/api/', apiLimiter);

// Route Handlers
app.use('/api/webhook', require('./routes/webhook'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/destinations', require('./routes/destinations'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
