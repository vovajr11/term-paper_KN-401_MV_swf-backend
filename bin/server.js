const mongoose = require('mongoose');

const app = require('../app');

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(process.env.PORT || 8080);
    console.log('MongoDB Connected');
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
