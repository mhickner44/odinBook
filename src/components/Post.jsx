import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'


export default function Post({ post }) {

   
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <h4>number of comments {post.comments.length}</h4>

        </>
    )


}

