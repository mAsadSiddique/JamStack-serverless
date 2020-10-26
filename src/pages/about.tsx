import React from 'react';
import Header from './Components/Header';
import Layout from './Components/Layout';

function about() {
    return (
        <Layout HeaderTitle="About ">
            <div>
                <Header title="About" />
                <h3>About Page</h3>
            </div>
        </Layout>

    )
}

export default about
