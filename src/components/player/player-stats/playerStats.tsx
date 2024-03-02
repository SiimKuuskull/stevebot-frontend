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
        const w = await response.json();
        console.log(w);
        setPlayerStats(w);
    }
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Rank" value={'Platinum II'} />
                <Statistic title="Win rate %" value={'44%'} />
                <Statistic title="W / L" value={'8/6'} />
            </Col>
        </Row>
    );
}
