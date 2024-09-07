import { Badge } from 'antd';

interface Props {
    botStatus: string;
}
export default function DisplayStatus({ botStatus }: Props) {
    if (botStatus !== 'pong') {
        return <Badge status="error" text="Offline" />;
    } else {
        return <Badge status="success" text="Online" />;
    }
}
