import { useState } from 'react'
import './App.css'
import { Layout } from 'antd';
import Header from './components/header/Header';


function App() {

  return (
    <Layout className="layout">
                <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
                  <Header></Header>
                </Layout.Header>
                <Layout.Content>
                </Layout.Content>
                <Layout.Footer></Layout.Footer>
            </Layout>
  )
}

export default App
