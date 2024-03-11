import { Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';

export default function PlayerStats() {
    const [playerStats, setPlayerStats] = useState();
    useEffect(() => {
        getPlayerStats();
    }, []);
    async function getPlayerStats() {
        const response = await fetch('http://172.22.31.60:3000/player/player-stats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const playerStats = await response.json();
        console.log(playerStats);
        setPlayerStats(playerStats);
    }
    const playerSoloWins: number = playerStats[0].wins;
    const playerSoloLosses: number = playerStats[0].losses;
    const playerWinRate = Math.round((playerSoloWins / (playerSoloWins + playerSoloLosses)) * 100);
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Rank" value={`${playerStats[0].tier} ${playerStats[0].rank}`} />
                <Statistic title="Win rate %" value={`${playerWinRate}%`} />
                <Statistic title="W / L" value={`${playerStats[0].wins}/${playerStats[0].losses}`} />
            </Col>
        </Row>
    );
}
