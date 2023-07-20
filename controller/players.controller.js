const playersData= require('../data/playersData');

const getPlayers = async (req, res) => {
    try {
        res.json(playersData)
    } catch (error) {
        res.json({ message: 'error'});
    }
}
const createPlayer = async (req, res) => {
    try {
        const { name, team } = req.body
        const newPlayer = { id: playersData.length + 1, name: name, team: team }
        playersData.push(newPlayer);
        res.json({ message: 'successfully added' });
    } catch (error) {
        res.status(500).json({message: 'Error' });
    }
}

module.exports = {
    createPlayer,
    getPlayers
}