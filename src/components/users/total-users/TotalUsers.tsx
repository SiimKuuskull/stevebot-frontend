import { Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';

export default function TotalUsers() {
    const [users, setUsers] = useState('');
    useEffect(() => {
        getUserCount();
    }, []);
    async function getUserCount() {
        const response = await fetch('http://172.22.31.60:3000/users/user-count', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const users = await response.json();
        console.log(users);
        setUsers(users);
    }
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Active Users" value={users} />
            </Col>
        </Row>
    );
}
