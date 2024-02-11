//get a user profile here with the correct token 
import { useEffect } from "react";
import profilePic from "../assets/profilePic.png"

//make a request for the information that it needs 
//make a simple get request right now



const profile = () => {

    //needs to be async
    const getProfile = async () => {
        //

        let token = localStorage.getItem("loginToken")

        let profileInfo = await fetch('http://localhost:3000/profile', {
            method: 'GET',
            headers: {  "Content-Type": "application/json",  'Accept': 'application/json',Authorization: `Bearer ${token}` },

        }).then(function (response) {

            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }

            //store the token here and store in local storage.
        });


    }


    //in useeffect?
    useEffect(() => {
        getProfile();
        console.log("I made a API call")
      },[]);


    return (
        <>
            <h1>name</h1>
            {/* <img src={profilePic} /> */}

            <div className="friendContainer">
                <h2>23 friends</h2>
                <h2>23 posts</h2>
            </div>
        </>
    )
}
export default profile;
