import React from "react";
import styles from './rightBar.module.css'

export default function RightBar() {
    return(
        <div className={styles.options}>
            <button className={styles.button}>Opcion 1</button>
            <button className={styles.button}>Opcion 2</button>
            <button className={styles.button}>Opcion 3</button>
            <button className={styles.button}>Opcion 4</button>
        </div>
    )
}