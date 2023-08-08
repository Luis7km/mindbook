import React from "react";
import styles from './mainContent.module.css'

export default function MainContent({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}