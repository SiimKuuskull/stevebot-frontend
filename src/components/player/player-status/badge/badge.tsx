import { Badge } from 'antd';

interface Props {
    playerStatus: string;
}
export default function DisplayStatus({ playerStatus }: Props) {
    if (playerStatus !== 'Online') {
        return <Badge status="error" text="Offline" />;
    } else {
        return <Badge status="success" text="Online" />;
    }
}
