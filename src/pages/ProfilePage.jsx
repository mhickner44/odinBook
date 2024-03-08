//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import profilePic from "../assets/profilePic.png"
import fetcher from "../helpers/fetcher"
import Post from "../components/Post"
import Profile from "../components/Profile"
import { useParams } from "react-router-dom";
//make a request for the information that it needs 
//make a simple get request right now

const ProfilePage = () => {
    //get the props passed from the link 

    const [info, setInfo] = useState("");
    const [posts, setPosts] = useState([]);
    //use this for username a user whose profile we want to get /could have a helper that gets 
    //the user id?
    const param = useParams()
//if param id isnt there its a normal requests 

    console.log(param.id)

    //needs to be async
    const getProfile = async () => {

        const [userProfile, userPosts] = await Promise.all([
            await fetcher('http://localhost:3000/profile', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json',"user":param.id },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                setInfo(data)
                //store the token here and store in local storage.
              
            }),
            await fetcher('http://localhost:3000/postFeed/userPosts', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json',"user":param.id },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                setPosts(data)
                //store the token here and store in local storage.
            }),
        ]);
    }


    //in useeffect?
    useEffect(() => {
        getProfile();
    }, []);


    return (

        <>
            <Profile info={info} posts={posts} />
        </>

    )
}
export default ProfilePage;
