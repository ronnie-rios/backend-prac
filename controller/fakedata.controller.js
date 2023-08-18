const data = require('../data.json');

const getCats = async (req, res) => {
    try {
        res.json(data);
    } catch (error) {
        res.json(error)
    }
}

module.exports = { 
    getCats
}