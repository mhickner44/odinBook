import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'


const Post = () => {


    return (

        <>
            <h2>Title</h2>
            <p>body of the post</p>
            <div className='postInfo'>
                <h4>likes:3</h4>
                <h4>Comments:5</h4>
            </div>
        </>
    )


}

export default Post;