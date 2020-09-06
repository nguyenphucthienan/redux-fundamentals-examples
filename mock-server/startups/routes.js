const userRoutes = require('../routes/userRoutes');
const postRoutes = require('../routes/postRoutes');

module.exports = app => {
  app.use('/api/users', userRoutes);
  app.use('/api/posts', postRoutes);
};
