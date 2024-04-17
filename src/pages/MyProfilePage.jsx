//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import fetcher from "../helpers/fetcher"
import Profile from "../components/Profile"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//make a request for the information that it needs 
//make a simple get request right now

const myProfilePage = () => {
    //get the props passed from the link 

    const [info, setInfo] = useState("");
    const [posts, setPosts] = useState([]);
    //use this for username a user whose profile we want to get /could have a helper that gets 
    //the user id?
    const param = useParams()
//if param id isnt there its a normal requests 

  

    //needs to be async
    const getProfile = async () => {

        const [userProfile, userPosts] = await Promise.all([
            await fetcher('https://socialmediaserver.fly.dev/profile/myProfile', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
               
                setInfo(data)
                //store the token here and store in local storage.
              
            }),
            await fetcher('https://socialmediaserver.fly.dev/postFeed/userPosts', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json',"user":param.id },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                setPosts(data)
            
            }),
        ]);
    }


    //in useeffect?
    useEffect(() => {
        getProfile();
    }, []);


    return (

        <>
       <Link to="/FriendRequests"  class="text-right m-5"><i class="fa-solid fa-user"> Requests</i></Link>
      
            <Profile info={info} posts={posts} />
        </>

    )
}
export default myProfilePage;
