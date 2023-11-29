const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./src/routes/postRoutes');
const commentRoutes = require('./src/routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/blog-app', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/', postRoutes);
app.use('/', commentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
