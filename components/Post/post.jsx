import React from "react";
import PostComent from "../PostComent/postComent";
import PostContent from "../PostContent/postContent";
import styles from "./post.module.css"
import Link from "next/link";

const Post = () => {
    const posts = Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={styles.post}>
          <div>
            <Link href="/">The publisher</Link>
            <PostContent />
            <PostComent />
          </div>
        </div>
      ));
    
      return <div>{posts}</div>;
}

export default Post