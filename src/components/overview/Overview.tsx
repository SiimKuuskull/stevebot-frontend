import { Col, Divider, Row } from 'antd';
import BotStatus from './bot-status/BotStatus';
import OngoingBets from './ongoing-bets/OngoingBets';
import Activity from './activity/Activity';
import BetsToday from './bets-today/BetsToday';

export default function Overview() {
    return (
        <>
            <Divider orientation="left">Overview</Divider>
            <Row justify="space-around" align="top">
                <Col span={6}>
                    <BotStatus></BotStatus>
                </Col>
                <Col span={6}>
                    <Activity></Activity>
                </Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>
            <Divider orientation="left"></Divider>
            <Row justify="space-around" align="middle">
                <Col span={12}>
                    <OngoingBets></OngoingBets>
                </Col>
                <Col span={8}></Col>
                <Col span={12}>
                    <BetsToday></BetsToday>
                </Col>
                <Col span={8}></Col>
            </Row>
            <Divider orientation="left"></Divider>
            <Row justify="space-between" align="top">
                <Col span={4}></Col>
                <Col span={4}> </Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>
        </>
    );
}
