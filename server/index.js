const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require('./models/Calculation');

const mongoUri = keys.mongoURI || 'mongodb://localhost:27017/web-calculator';
mongoose.connect(mongoUri, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

// in production, serve build when user requests path '/'.
app.use(express.static('../client/build'));

require('./routes/calculationRoutes')(app);

// routing requests from react router will be redirected to index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
