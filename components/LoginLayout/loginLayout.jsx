import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import styles from "./loginLayout.module.css"

export default function LoginLayout({children}) {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.slogan}>
                <div className={styles.sloganText}>
                    {children[0]}
                </div>
            </div>
            <div className={styles.form}>
                {children[1]}
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}