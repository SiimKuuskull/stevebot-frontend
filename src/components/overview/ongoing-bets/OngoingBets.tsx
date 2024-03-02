import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
        title: 'Odds',
        dataIndex: 'odds',
    },
    {
        title: 'Guess',
        dataIndex: 'guess',
    },
];

const data = [
    {
        key: '1',
        name: 'jumpermaku',
        amount: 32,
        odds: 1,
        guess: 'Win',
    },
    {
        key: '2',
        name: 'Pulk',
        amount: 32,
        odds: 1,
        guess: 'Win',
    },
    {
        key: '3',
        name: 'Mihkel',
        amount: 32,
        odds: 1,
        guess: 'Win',
    },
    {
        key: '4',
        name: 'Tanel',
        amount: 32,
        odds: 1.4,
        guess: 'Win',
    },
    {
        key: '5',
        name: 'Rasmus',
        amount: 32,
        odds: 1.6,
        guess: 'Win',
    },
    {
        key: '6',
        name: 'Aron',
        amount: 32,
        odds: 1.8,
        guess: 'Win',
    },
];

export default function OngoingBets() {
    return <Table title={() => 'Ongoing bets'} columns={columns} dataSource={data} />;
}
