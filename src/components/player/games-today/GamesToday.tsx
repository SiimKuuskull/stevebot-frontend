import { Table } from 'antd';
import { useEffect, useState } from 'react';

export default function GamesToday() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        getGamesToday();
    }, []);
    async function getGamesToday() {
        const response = await fetch('http://172.22.31.60:3000/games/history-today', {
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
    return <Table title={() => "Steve's games today"} columns={columns} dataSource={games} rowKey="gameId" />;
}

const columns = [
    {
        title: 'Game ID',
        dataIndex: 'gameId',
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
        title: 'Game Status',
        dataIndex: 'gameStatus',
    },
];
