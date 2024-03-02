import { Col, Row, Statistic } from 'antd';

export default function totalUsers() {
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Active Users" value={12} />
            </Col>
        </Row>
    );
}
