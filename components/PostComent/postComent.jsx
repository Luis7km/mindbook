import React from "react";
import styles from "./postComent.module.css"
import Link from "next/link";
import Coment from "../Coment/coment";
import ComentForm from "../ComentForm/comentForm";
export default function PostComent() {
    return (
        <div className={styles.container}>
            <Coment/>
            <Coment/>
            <Coment/>
            <hr/>
            <ComentForm/>
        </div>
    )
}