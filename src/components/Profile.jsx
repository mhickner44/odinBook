//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import profilePic from "../assets/profilePic.png"
import Post from "../components/Post"
//make a request for the information that it needs 
//make a simple get request right now

export default function Profile({ info,posts}) {

    return (
        <>
            <h1>{info.username}</h1>
            <img src={profilePic} />

            <div className="friendContainer">
                <h2>{info.friendTotal} friends</h2>
                <h2>{info.postTotal} posts</h2>
            </div>
            <div>
                <h1>Posts</h1>
                { //POSTS NEED TO BE DISPLAYED . THEY ARE IN A ARRAY
                     posts.map((object, i) => <Post post={object} key={i} />)
                }
            </div>
        </>
    )
}

