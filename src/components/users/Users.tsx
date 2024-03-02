import { Divider, Row, Col } from 'antd';
import TotalUsers from './total-users/TotalUsers';
import UsersStatistics from './users-statistics/UsersStatistics';

export default function Users() {
    return (
        <>
            <Divider orientation="left">Users</Divider>
            <Row justify="start">
                <Col span={8}>
                    <TotalUsers></TotalUsers>
                </Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>

            <Divider orientation="left">Statistics</Divider>
            <Row justify="center">
                <Col span={14}>
                    <UsersStatistics></UsersStatistics>
                </Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>

            <Divider orientation="left"></Divider>
            <Row justify="end">
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>

            <Divider orientation="left"></Divider>
            <Row justify="space-between">
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>

            <Divider orientation="left"></Divider>
            <Row justify="space-around">
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>

            <Divider orientation="left"></Divider>
            <Row justify="space-evenly">
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
                <Col span={4}></Col>
            </Row>
        </>
    );
}
