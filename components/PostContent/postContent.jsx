import React from "react";
import Image from "next/image";
import styles from "./postContent.module.css";
export default function PostContent() {
    return (
        <div>
            <p>Vaya preciosura grrrr</p>
            <div className={styles.imageContainer}>
                <Image
                    src={"/images/Posts/shogun.jpg"}
                    quality={100}
                    width={600}
                    height={300}
                />
            </div>  
        </div>
    )
}