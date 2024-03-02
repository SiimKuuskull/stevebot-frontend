import './App.css';
import { Layout } from 'antd';
import Header from './components/header/Header';
import Routing from './components/routes/routes';

function App() {
    return (
        <>
            <Layout className="layout">
                <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
                    <Header></Header>
                </Layout.Header>
                <Layout.Content>
                    <Routing></Routing>
                </Layout.Content>
                <Layout.Footer></Layout.Footer>
            </Layout>
        </>
    );
}

export default App;
