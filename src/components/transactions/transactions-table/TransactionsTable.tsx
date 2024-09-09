import { Table } from 'antd';
import { useEffect, useState } from 'react';

export default function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        getTransactions();
    }, []);
    async function getTransactions() {
        const response = await fetch('http://172.22.31.60:3000/transactions/find-transactions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const x = await response.json();
        console.log(x);
        setTransactions(x);
    }
    return <Table title={() => 'Transactions'} columns={columns} dataSource={transactions} />;
}

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'User Id',
        dataIndex: 'userId',
    },
    {
        title: 'Balance',
        dataIndex: 'balance',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
        title: 'Type',
        dataIndex: 'type',
    },
    {
        title: 'Transaction ID',
        dataIndex: 'externalTransactionId',
    },
    {
        title: 'created at',
        dataIndex: 'createdAt',
    },
    {
        title: 'updated at',
        dataIndex: 'updatedAt',
    },
];
