import React from "react";
import Image from "next/image";
import styles from "./postContent.module.css";
export default function PostContent() {
    return (
        <div className={styles.container}>
            <div className={styles.postBody}>
                <p>La Shogun Raiden es una figura majestuosa y poderosa en el mundo de Genshin Impact. Con su elegante armadura y su imponente presencia, ella irradia una belleza y gracia sin igual. Su habilidad para controlar el elemento Electro y su destreza en el combate la hacen una fuerza a tener en cuenta. Su liderazgo y sabiduría son respetados por todos los habitantes de Inazuma, y su dedicación a proteger a su gente es verdaderamente admirable. En resumen, la Shogun Raiden es una verdadera joya en el mundo de Genshin Impact.</p>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={"/images/Posts/shogun.jpg"}
                    alt="Image"
                    quality={100}
                    width={4096}
                    height={2160}
                    style={{ width: '100%', height: 'auto'}}
                />
            </div>  
        </div>
    )
}