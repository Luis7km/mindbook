import React from "react";
import styles from './leftBar.module.css'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'; // Importa el hook useRouter

export default function LeftBar() {
    const router = useRouter(); // Obtén la instancia de useRouter

    return (
        <div className={styles.options}>
            {/* Aplica estilos condicionales al enlace dependiendo de la ruta actual */}
            <Link href='/' className={router.pathname === '/' ? styles.buttonSelected : styles.button}>
                <Image
                    priority
                    src={router.pathname === '/' ? "/images/homeSelected.svg" : "/images/home.svg"}
                    className={styles.image}
                    width={30}
                    height={30}
                    alt=""
                />
                Inicio
            </Link>
            <Link href='/profile' className={router.pathname === '/profile' ? styles.buttonSelected : styles.button}>
                <Image
                    priority
                    src={router.pathname === '/profile' ? "/images/profileSelected.svg" : "/images/profile.svg"}
                    className={styles.image}
                    width={30}
                    height={30}
                    alt=""
                />
                Perfil
            </Link>
            <Link href='/messages' className={router.pathname === '/messages' ? styles.buttonSelected : styles.button}>
                <Image
                    priority
                    src={router.pathname === '/messages' ? "/images/messageSelected.svg" : "/images/message.svg"}
                    className={styles.image}
                    width={30}
                    height={30}
                    alt=""
                />
                Mensajes
            </Link>
            <Link href='/games' className={router.pathname === '/games' ? styles.buttonSelected : styles.button}>
                <Image
                    priority
                    src={router.pathname === '/games' ? "/images/gameSelected.svg" : "/images/game.svg"}
                    className={styles.image}
                    width={30}
                    height={30}
                    alt=""
                />
                Juegos
            </Link>
        </div>
    )
}