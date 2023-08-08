import React from "react";
import PostComent from "../PostComent/postComent";
import PostContent from "../PostContent/postContent";
import Link from "next/link";
export default function Post() {
    return (
        <div>
            <Link href='/'>The publisher</Link>
            <PostContent/>
            <PostComent/>
        </div>
    )
}