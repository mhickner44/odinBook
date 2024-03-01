//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import profilePic from "../assets/profilePic.png"
import fetcher from "../helpers/fetcher"
import Post from "../components/Post"
//make a request for the information that it needs 
//make a simple get request right now

const profile = () => {
    const [info, setInfo] = useState("");
    const [posts, setPosts] = useState([]);
    //needs to be async
    const getProfile = async () => {

        const [userProfile, userPosts] = await Promise.all([
            await fetcher('http://localhost:3000/profile', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                setInfo(data)
                //store the token here and store in local storage.
            }),
            await fetcher('http://localhost:3000/postFeed/userPosts', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                setPosts(data)
                //store the token here and store in local storage.
            }),
        ])

            ;


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

                { //POSTS NEED TO BE DISPLAYED . THEY ARE IN A ARRAY
                   posts.map((object, i) => <Post post={object} key={i} />)
                }
            </div>
        </>
    )
}
export default profile;
