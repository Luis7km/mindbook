import React from "react";
import styles from "./login.module.css"

export default function Login() {
    return (
        <div className={styles.container}>
            <form>
                <div>
                    <input className={styles.input} type="email" name="" id="" placeholder="Correo electronico"/>
                </div>
                <div>
                    <input className={styles.input} type="password" name="" id="" placeholder="Contrasena"/>
                </div>
                <hr />
                <div>
                    <input className={styles.loginButton} type="submit" value="Iniciar sesion" />
                </div>
                <hr />
                <div>
                    <input className={styles.registerButton} type="submit" value="Crear cuenta" />
                </div>
            </form>
        </div>
    )
}