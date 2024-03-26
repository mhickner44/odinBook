import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'


export default function Post(props) {

    //will need to pas the ID on clicking the link
    return (
        <>
            <h2>{props.post.title}</h2>
            <p>{props.post.content}</p>
            <h4>user {props.username}</h4>
            <h4>likes:{props.post.likes}</h4>
            <h4>number of comments {props.post.comment}</h4>
            <h4>created at +{props.post.createdAt}</h4>

        </>
    )


}

