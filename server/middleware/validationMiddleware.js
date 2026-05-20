const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  next();
};

const validatePackage = (req, res, next) => {
  const { title, price, location } = req.body;
  if (!title || price === undefined || !location) {
    return res.status(400).json({ error: 'Title, price, and location are required' });
  }
  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }
  next();
};

const sanitizePrompt = (req, res, next) => {
  const { content } = req.body;
  if (content) {
    const forbiddenPatterns = [
      /ignore previous instructions/i,
      /system prompt/i,
      /reveal secrets/i,
      /you are now/i
    ];
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(content)) {
        return res.status(400).json({ error: 'Potentially malicious prompt detected' });
      }
    }
  }
  next();
};

module.exports = {
  validateLogin,
  validatePackage,
  sanitizePrompt
};
