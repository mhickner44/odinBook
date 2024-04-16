//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import profilePic from "../assets/profilePic.png"
import Post from "../components/Post"
import fetcher from "../helpers/fetcher";
import { useForm } from "react-hook-form";
import EditProfile from "../components/editProfile"


//make a request for the information that it needs 
//make a simple get request right now

export default function Profile({ info, posts }) {



    const [trigger, setTrigger] = useState(false)


    function FriendBtn() {
        let btnElement;

        if (info.reqType == false) {
            btnElement = <EditProfile />
            //could add a profile pic upload button to show here
        } else if (info.requested == true) {
            btnElement
        } else if (trigger == true) {
            btnElement
        } else {
            btnElement = <button onClick={friendReq} class="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4  m-auto rounded focus:outline-none focus:shadow-outline ">follow {info.currentFriend}</button>
        }
        return btnElement
    }


    //follow request  action event make request with user name in body


    async function friendReq() {

        let friendedUser = { friendedUser: info.userID }
        fetcher("https://socialmediaserver.fly.dev/requests", {
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
            <div class="mx-auto h-fit w-3/4 flex space-y-3 flex-col  shrink align-center text-center">
                <img src={info.profilePic} class="rounded-full w-1/4 h-3/5 mx-auto my-5" />
                <h1 class="text-5xl font-bold ">{info.username}</h1>
                <FriendBtn />
                <div className="friendContainer flex justify-center gap-x-5	" >
                    <h2><i class="fa-solid fa-user-group text-blue-700"></i>{info.friendTotal} </h2>
                    <h2><i class="fa-solid fa-signs-post  text-blue-700"></i>{info.postTotal}</h2>
                </div>
            </div>

            <div>
            <h1 class="text-3xl font-bold text-center">Posts</h1>
                { //POSTS NEED TO BE DISPLAYED . THEY ARE IN A ARRAY
                    posts.map((object, i) => <Post post={object} key={i} />)
                }
            </div>
        </>
    )
}

