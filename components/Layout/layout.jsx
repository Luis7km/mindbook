import React from 'react';
import Header from '../Header/header'
import Footer from '../Footer/footer'
import styles from './layout.module.css'
import LeftBar from '../LeftBar/leftBar';
import RightBar from '../RightBar/rightBar';

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <LeftBar/>
                <main>{children}</main>
                <RightBar/>
            </div>
            <Footer/>
        </div>
    )
}