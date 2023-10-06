import fs from 'fs';

export function readNbaPlayersData(filePath) {
    // Read the CSV file synchronously
    const fileData = fs.readFileSync(filePath, 'utf-8')
    .trim()
    .split('\n')
    .slice(1);

    const cleanedData = fileData.map((line) => {
        const fields = line.split(',');
        const rowData = {
            id: parseInt(fields[0]),
            player_name: fields[1],
            team_abbreviation: fields[2],
            age: parseFloat(fields[3]),
            player_height: parseFloat(fields[4]),
            player_weight: parseFloat(fields[5]),
            college: fields[6],
            country: fields[7],
            draft_year: parseInt(fields[8]),
            draft_round: parseInt(fields[9]),
            draft_number: parseInt(fields[10]),
            gp: parseFloat(fields[11]),
            pts: parseFloat(fields[12]),
            reb: parseFloat(fields[13]),
            ast: parseFloat(fields[14]),
            net_rating: parseFloat(fields[15]),
            oreb_pct: parseFloat(fields[16]),
            dreb_pct: parseFloat(fields[17]),
            usg_pct: parseFloat(fields[18]),
            ts_pct: parseFloat(fields[19]),
            ast_pct: parseFloat(fields[20]),
            season: fields[21]
        };
        return rowData;
    });

    return cleanedData;
}
