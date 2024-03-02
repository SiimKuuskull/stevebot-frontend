import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

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
        children: <Badge status="error" text="Offline" />,
        span: 3,
    },
];

export default function BotStatus() {
    return <Descriptions title="Activity" bordered items={items} />;
}
