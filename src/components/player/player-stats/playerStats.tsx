import { Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';

interface PlayerStatsType {
    tier: string;
    rank: string;
    wins: number;
    losses: number;
}

export default function PlayerStats() {
    const [playerStats, setPlayerStats] = useState<PlayerStatsType[]>([]);

    useEffect(() => {
        getPlayerStats();
    }, []);

    async function getPlayerStats() {
        try {
            const response = await fetch('http://172.22.31.60:3000/player/player-stats', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const playerStatsData: PlayerStatsType[] = await response.json();
            console.log(playerStatsData);
            setPlayerStats(playerStatsData);
        } catch (error) {
            console.error('Error fetching player stats:', error);
        }
    }

    const playerStatsToShow = playerStats[0] || { tier: '', rank: '', wins: 0, losses: 0 };
    const playerSoloWins: number = playerStatsToShow.wins;
    const playerSoloLosses: number = playerStatsToShow.losses;
    const playerWinRate = Math.round((playerSoloWins / (playerSoloWins + playerSoloLosses)) * 100);

    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Rank" value={`${playerStatsToShow.tier} ${playerStatsToShow.rank}`} />
                <Statistic title="Win rate %" value={`${playerWinRate}%`} />
                <Statistic title="W / L" value={`${playerSoloWins}/${playerSoloLosses}`} />
            </Col>
        </Row>
    );
}
