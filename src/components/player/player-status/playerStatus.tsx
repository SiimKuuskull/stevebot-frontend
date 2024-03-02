import { Descriptions, DescriptionsProps } from 'antd';
import { useEffect, useState } from 'react';
import DisplayStatus from './badge/badge';

export default function PlayerStatus() {
    console.log('test');
    const [playerStatus, setPlayerStatus] = useState('');
    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Player',
            children: 'Steve',
            span: 3,
        },
        {
            key: '2',
            label: 'Status',
            children: <DisplayStatus playerStatus={playerStatus} />,
            span: 3,
        },
    ];
    useEffect(() => {
        getPlayerStatus();
    }, []);
    async function getPlayerStatus() {
        const response = await fetch('http://172.22.31.60:3000/player/player-status', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const playerStatus = await response.json();
        console.log(playerStatus);
        setPlayerStatus(playerStatus);
    }
    return <Descriptions title="Activity" bordered items={items} />;
}
