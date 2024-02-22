import { Menu } from 'antd';

export default function Header() {

    return (
        <Menu
            className="menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
                { key: '1', label: 'item 1' },
                { key: '2', label: 'item 2' },
            ]}
            style={{ flex: 1, minWidth: 0 }}
        />
    );
}