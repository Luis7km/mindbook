import React from 'react';
import Header from '../Header/header'
import Footer from '../Footer/footer'
import styles from './layout.module.css'
import LeftBar from '../LeftBar/leftBar';
import RightBar from '../RightBar/rightBar';

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.leftBar}>
                <LeftBar/>
            </div>
            <div className={styles.main}>
                {children}
            </div>
            <div className={styles.rightBar}>
                <RightBar/>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}