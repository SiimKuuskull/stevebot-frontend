import { DashboardOutlined, TeamOutlined, DatabaseOutlined, SolutionOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Menu className="menu" theme="dark" defaultSelectedKeys={['1']} mode="horizontal">
            <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/">Overview</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
                <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DatabaseOutlined />}>
                <Link to="/transactions">Transactions</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<SolutionOutlined />}>
                <Link to="/player">Player</Link>
            </Menu.Item>
        </Menu>
    );
}
