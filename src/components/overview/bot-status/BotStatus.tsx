import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { useEffect, useState } from 'react';
import DisplayStatus from './badge/badge';

export default function BotStatus() {
    const [botStatus, setBotStatus] = useState('');
    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Product',
            children: 'Stevebot',
            span: 3,
        },
        {
            key: '2',
            label: 'Status',
            children: <DisplayStatus botStatus={botStatus} />,
            span: 3,
        },
    ];
    useEffect(() => {
        getBotStatus();
    }, []);
    async function getBotStatus() {
        const response = await fetch('http://172.22.31.60:3000/ping', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const botStatus = await response.json();
        console.log(botStatus);
        setBotStatus(botStatus);
    }

    return <Descriptions title="Service" bordered items={items} />;
}
