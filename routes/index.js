const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello, Sarah!!!Again');
});

module.exports = routes;