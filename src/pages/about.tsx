import React from 'react';
import Header from './Components/Header';
import Layout from './Components/Layout';
import styles from '../pages/About.module.css';

function about() {
    return (
        <Layout HeaderTitle="About ">
            <div className={styles.my__title}>
                <Header title="About" />
                <h3>About Page</h3>
            </div>
        </Layout>

    )
}

export default about
