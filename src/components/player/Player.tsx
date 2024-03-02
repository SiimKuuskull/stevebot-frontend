import { Col, Divider, Row } from 'antd';
import GamesToday from './games-today/GamesToday';
import LastSeenPlayer from './last-seen-player/lastSeenPlayer';
import PlayerStatus from './player-status/playerStatus';
import PlayerStats from './player-stats/playerStats';
export default function player() {
    return (
        <>
            <Divider orientation="left">Overview</Divider>
            <Row justify="space-around" align="top">
                <Col span={6}>
                    <PlayerStatus />
                </Col>
                <Col span={4}>
                    <LastSeenPlayer></LastSeenPlayer>
                </Col>
                <Col span={4}></Col>
            </Row>
            <Divider orientation="left"></Divider>
            <Row justify="space-around" align="middle">
                <Col span={12}>
                    <GamesToday></GamesToday>
                </Col>
                <Col span={5}>
                    <PlayerStats />
                </Col>

                <Col span={8}></Col>
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
