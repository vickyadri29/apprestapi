const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse Application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Call Routes
const routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log('Server is running...')
})