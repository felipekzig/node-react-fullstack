const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

require('./services/passport');
require('./routes/authRoutes')(app);

app.listen(PORT);
