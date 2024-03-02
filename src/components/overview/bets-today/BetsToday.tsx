import { Table } from 'antd';

const data = [
    {
        key: '1',
        game: 1012411234,
        name: 'jumpermaku',
        amount: 125,
        odds: 2,
        guess: 'Win',
        result: 'Lose',
        gameResult: 'Lose',
    },
    {
        key: '2',
        game: 1012411234,
        name: 'Pulk',
        amount: 5,
        odds: 1.6,
        guess: 'Lose',
        result: 'Lose',
        gameResult: 'Win',
    },
    {
        key: '3',
        game: 1013256643,
        name: 'Mihkel',
        amount: 30,
        odds: 2,
        guess: 'Lose',
        result: 'Lose',
        gameResult: 'Win',
    },
    {
        key: '4',
        game: 1013256643,
        name: 'Mihkel',
        amount: 25,
        odds: 1.2,
        guess: 'Lose',
        result: 'Lose',
        gameResult: 'Win',
    },
];

const columns = [
    {
        title: 'Game',
        dataIndex: 'game',
    },
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
    {
        title: 'Result',
        dataIndex: 'result',
    },
    {
        title: 'GameResult',
        dataIndex: 'gameResult',
    },
];

export default function BetsToday() {
    return <Table title={() => `Bets made today`} columns={columns} dataSource={data} />;
}
