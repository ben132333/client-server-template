import express from 'express';
import cors from 'cors';
import { readNbaPlayersData } from './readCsv.js';

/* 
    Data source: https://www.kaggle.com/datasets/justinas/nba-players-data/
    "Biometric, biographic and basic box score features from 1996 to 2021 season"
*/
const nbaPlayers = readNbaPlayersData('all_seasons.csv');

const nbaApi = express();

nbaApi.use(cors());
nbaApi.use(express.json());

const getCallback = (req, res) => {
    const q = req.query.q?.toLowerCase() || '';
    const result = nbaPlayers.filter(
        player => 
        { return player.player_name.toLowerCase().includes(q); }
    )

    res.json(result);
}
nbaApi.get('', getCallback);

nbaApi.listen(8080, 
    () => {console.log('Server is running on port http://localhost:8080')}
);

export default nbaApi;