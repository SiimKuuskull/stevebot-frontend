import { Table } from 'antd';

export default function TransactionsTable() {
    return <Table title={() => 'Transactions'} columns={columns} dataSource={data} />;
}

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Balance',
        dataIndex: 'balance',
    },
    {
        title: 'Transaction',
        dataIndex: 'transaction',
    },
    {
        title: 'Type',
        dataIndex: 'transactionType',
    },
    {
        title: 'Transaction ID',
        dataIndex: 'externalTransactionId',
    },
    {
        title: 'created at',
        dataIndex: 'createdAt',
    },
];

const data = [
    {
        key: '1',
        id: 1357357438171388,
        name: 'jumpermaku',
        balance: 0,
        transaction: 2,
        transactionType: 2,
        externalTransactionId: 2,
        createdAt: '2024-02-22',
    },
    {
        key: '2',
        id: 1357357438171388,
        name: 'Tanel',
        balance: 0,
        transaction: 2,
        transactionType: 2,
        externalTransactionId: 2,
        createdAt: '2024-02-22',
    },
    {
        key: '3',
        id: 1357357438171388,
        name: 'Mihkel',
        balance: 0,
        transaction: 2,
        transactionType: 2,
        externalTransactionId: 2,
        createdAt: '2024-02-22',
    },
];
