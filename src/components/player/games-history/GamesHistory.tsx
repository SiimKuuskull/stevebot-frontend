import { Table } from 'antd';
import { useState, useEffect } from 'react';

export default function GamesHistory() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        getGamesHistory();
    }, []);
    async function getGamesHistory() {
        const response = await fetch('http://172.22.31.60:3000/games/history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const x = await response.json();

        const updatedGames = x.map((game: any) => ({
            ...game,
            gameResult: game.gameResult ? 'WIN' : 'LOSS',
        }));
        setGames(updatedGames);
    }
    return <Table title={() => "Steve's games played"} columns={columns} dataSource={games} rowKey="gameId" />;
}

const columns = [
    {
        title: 'Game ID',
        dataIndex: 'id',
    },
    {
        title: 'Created at',
        dataIndex: 'createdAt',
    },
    {
        title: 'Result',
        dataIndex: 'gameResult',
    },
    {
        title: 'Status',
        dataIndex: 'gameStatus',
    },
    {
        title: 'Start Time',
        dataIndex: 'gameStartTime',
    },
    {
        title: 'End Time',
        dataIndex: 'gameEndTime',
    },
];
