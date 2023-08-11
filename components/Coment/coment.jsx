import React from "react";
import Link from "next/link";
import styles from "./coment.module.css"

export default function Coment() {
    return (
        <div className={styles.coment}>
            <Link href="/" style={{textDecoration: "none", 
            color: "#22162A", fontWeight: "600" ,fontSize: "11pt"}}>The comenter: </Link>
            <div className={styles.comentBody}>
                <p>Yo la preñaria, la verdad. Siendo sincero.</p>
            </div>
        </div>
    )
}