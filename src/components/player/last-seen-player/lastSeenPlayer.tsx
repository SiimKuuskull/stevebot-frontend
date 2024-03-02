import { Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';

export default function LastSeenPlayer() {
    const [lastSeen, setLastSeen] = useState([]);
    useEffect(() => {
        getLastSeen();
    }, []);
    async function getLastSeen() {
        const response = await fetch('http://172.22.31.60:3000/player/last-seen-player', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const lastSeen = await response.json();
        setLastSeen(lastSeen);
    }
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Last seen:" value={`${lastSeen}`} />
            </Col>
        </Row>
    );
}
