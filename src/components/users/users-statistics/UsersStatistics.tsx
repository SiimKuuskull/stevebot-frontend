import { Table } from 'antd';
import { useEffect, useState } from 'react';

export default function UsersStatistics() {
    const [userStatistics, setUserStatistics] = useState([]);
    useEffect(() => {
        getUserStatistics();
    }, []);
    async function getUserStatistics() {
        const response = await fetch('http://172.22.31.60:3000/users/user-statistics', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const x = await response.json();
        setUserStatistics(x);
    }
    return <Table title={() => 'User Statistics'} columns={columns} dataSource={userStatistics} />;
}

const columns = [
    {
        title: 'Id',
        dataIndex: 'user_id',
    },
    {
        title: 'Name',
        dataIndex: 'user_name',
    },
    {
        title: 'Balance',
        dataIndex: 'amount',
    },
    {
        title: 'Profit',
        dataIndex: 'profit',
    },
];
