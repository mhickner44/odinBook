//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import profilePic from "../assets/profilePic.png"

//make a request for the information that it needs 
//make a simple get request right now



const profile = () => {
    const [info, setInfo] = useState("");
    //needs to be async
    const getProfile = async () => {


        let token = localStorage.getItem("loginToken")

        let profileInfo = await fetch('http://localhost:3000/profile', {
            method: 'GET',
            headers: { "Content-Type": "application/json", 'Accept': 'application/json', Authorization: `Bearer ${token}` },

        }).then(function (response) {

            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
            setInfo(data)
            //store the token here and store in local storage.
        });


    }


    //in useeffect?
    useEffect(() => {
        getProfile();

    }, []);


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
                
                {/* {POSTS NEED TO BE DISPLAYED . THEY ARE IN A ARRAY 
                    info[posts].forEach(element => {
                        <h3>"post info will be here" + {element}</h3>
                    })

                } */}
            </div>
        </>
    )
}
export default profile;
