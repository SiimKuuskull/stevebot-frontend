import { Divider, Row, Col } from 'antd';
import TransactionsTable from './transactions-table/TransactionsTable';

export default function Transactions() {
    return (
        <>
            <Divider orientation="left">Transactions</Divider>
            <Row justify="start">
                <Col span={8}>
                    <TransactionsTable></TransactionsTable>
                </Col>
            </Row>
        </>
    );
}
