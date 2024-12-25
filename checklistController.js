// controller to handle the logic of fetching data and evaluating the checklist

const axios = require('axios');
const rules = require('./src/config/rules');

const API_URL = 'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';

const getChecklistResults = async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data;

        const results = rules.map(rule => ({
            name: rule.name,
            status: rule.condition(data) ? 'Passed' : 'Failed'
        }));

        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

module.exports = {
    getChecklistResults
};
