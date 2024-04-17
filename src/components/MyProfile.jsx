//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import Post from "./Post"
import EditProfile from "./editProfile"


//make a request for the information that it needs 
//make a simple get request right now

export default function myProfile({ info, posts }) {
   


    const [trigger, setTrigger] = useState(false)


   

    return (
        <>
            <div class="mx-auto h-fit w-3/4 flex space-y-3 flex-col  shrink align-center text-center">
                <img src={info.profilePic} class="rounded-full w-1/4 h-3/5 mx-auto my-5" />
                <h1 class="text-5xl font-bold ">{info.username}</h1>
                <EditProfile />
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

