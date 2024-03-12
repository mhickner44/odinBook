//get a user profile here with the correct token 
import { useState } from "react";
import profilePic from "../assets/profilePic.png"
import Post from "../components/Post"
import fetcher from "../helpers/fetcher";
//make a request for the information that it needs 
//make a simple get request right now

export default function Profile({ info, posts }) {
 
   const [trigger,setTrigger]=useState(false)

    function FriendBtn() {
        let btnElement;
     
        if (info.reqType == false) {
            btnElement
        } else if (info.requested == true) {
            btnElement
        } else if (trigger == true) {
            btnElement
        }else {
            btnElement = <button onClick={friendReq}>follow {info.currentFriend}</button>
        }
        return btnElement
    }


    //follow request  action event make request with user name in body


    async function friendReq() {
      
        let friendedUser = { friendedUser: info.userID }
        fetcher("http://localhost:3000/requests", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                friendedUser
            )
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            setTrigger(true)
            alert("request sent!")
        });
    }




    return (
        <>
            <h1>{info.username}</h1>
            <img src={profilePic} />
            <FriendBtn />
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

