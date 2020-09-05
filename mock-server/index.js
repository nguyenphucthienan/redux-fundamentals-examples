const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('./startups/utils')(app);
require('./startups/cors')(app);
require('./startups/routes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});
