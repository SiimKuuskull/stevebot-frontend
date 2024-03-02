import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

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
        children: <Badge status="processing" text="Running" />,
        span: 3,
    },
];

export default function BotStatus() {
    return <Descriptions title="Service" bordered items={items} />;
}
