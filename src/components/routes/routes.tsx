import { Route, Routes } from 'react-router-dom';
import Overview from '../overview/Overview';
import Player from '../player/Player';
import Transactions from '../transactions/Transactions';
import Users from '../users/Users';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Overview />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/transactions" element={<Transactions />}></Route>
            <Route path="/player" element={<Player />}></Route>
        </Routes>
    );
}
