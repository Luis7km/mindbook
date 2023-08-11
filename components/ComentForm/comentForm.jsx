import React from "react";
import styles from "./comentForm.module.css"

export default function ComentForm() {
    return (
        <div>
            <form className={styles.form}>
                <input type="text" className={styles.formInput}></input>
                <input type="submit" className={styles.formSubmit} value="Comentar"/>
            </form>
        </div>
    )
}