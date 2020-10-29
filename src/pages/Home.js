import React from 'react'
import Layout from './Components/Layout'
import { Router } from '@reach/router'
import Client_1 from './Components/Client_1'
import Client_2 from './Components/Client_2'
import { Link } from 'gatsby'

function Home() {
    return (
        <Layout HeaderTitle="Home-2">
            <div >
                about Home Component
                <Link to="/Home/Client1">Client_1</Link>
                <Link to="/Home/Client2">Client_2</Link>
            </div>
            <div>
                <Router basepath="/Home">
                    <Client_1 path="/Client1" />
                    <Client_2 path="/Client2" />
                </Router>
            </div>
        </Layout>
    )
}

export default Home
