const express = require('express');
const fetchData = require('../utils/api');
const evaluateRules = require('../utils/evaluator');
const router = express.Router();

const API_URL = 'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';

router.get('/', async (req, res) => {
    try {
        const data = await fetchData(API_URL);
        const results = evaluateRules(data);
        res.render('dashboard', { results });
    } catch (error) {
        res.status(500).send('An error occurred while fetching data');
    }
});

module.exports = router;
