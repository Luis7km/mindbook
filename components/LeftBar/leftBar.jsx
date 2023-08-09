import React from "react";
import styles from './leftBar.module.css'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'; // Importa el hook useRouter

export default function LeftBar() {
    const router = useRouter(); // Obtén la instancia de useRouter

    return (
        <div className={styles.options}>
            <Link href='/' className={router.pathname === '/' ? styles.buttonSelected : styles.button}>
                <Image
                    priority
                    src={router.pathname === '/' ? "/images/UISvg/homeSelected.svg" : "/images/UISvg/home.svg"}
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
                    src={router.pathname === '/profile' ? "/images/UISvg/profileSelected.svg" : "/images/UISvg/profile.svg"}
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
                    src={router.pathname === '/messages' ? "/images/UISvg/messageSelected.svg" : "/images/UISvg/message.svg"}
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
                    src={router.pathname === '/games' ? "/images/UISvg/gameSelected.svg" : "/images/UISvg/game.svg"}
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