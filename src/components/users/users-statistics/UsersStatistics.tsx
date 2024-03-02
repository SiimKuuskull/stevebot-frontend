import { Table } from 'antd';

export default function UsersStatistics() {
    return <Table title={() => 'User Statistics'} columns={columns} dataSource={data} />;
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
        title: 'Profit',
        dataIndex: 'profit',
    },
];

const data = [
    {
        key: '1',
        id: 1357357438171388,
        name: 'jumpermaku',
        balance: 0,
        profit: -10,
    },
    {
        key: '2',
        id: 91485904851,
        name: 'ˇMihkel',
        balance: 32,
        profit: 30,
    },
    {
        key: '3',
        id: 5687932748,
        name: 'Estmaster',
        balance: 32,
        profit: 30,
    },
    {
        key: '4',
        id: 126787433,
        name: 'Pulk',
        balance: 32,
        profit: 30,
    },
    {
        key: '5',
        id: 10100007,
        name: 'Steve',
        balance: 32,
        profit: 30,
    },
    {
        key: '6',
        id: 1256767868654,
        name: 'Peeter',
        balance: 32,
        profit: 30,
    },
];
