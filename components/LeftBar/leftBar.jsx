import React from "react";
import styles from './leftBar.module.css'

export default function LeftBar() {
    return(
        <div className={styles.options}>
            <button className={styles.button}>Inicio</button>
            <button className={styles.button}>Perfil</button>
            <button className={styles.button}>Mensajes</button>
            <button className={styles.button}>Juegos</button>
        </div>
    )
}