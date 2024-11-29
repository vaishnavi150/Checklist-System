const rules = require('../config/rules');

const evaluateRules = (data) => {
    return rules.map((rule) => ({
        ruleName: rule.name,
        status: rule.check(data) ? 'Passed' : 'Failed',
    }));
};

module.exports = evaluateRules;
