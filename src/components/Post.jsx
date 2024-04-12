import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'


export default function Post(props) {

    console.log("i am in a post " + props)
    const [likes, setLikes] = useState(props.post.likes)

    //request in post 
    const likePost = async () => {
        event.preventDefault()

        let data = { postID: props.post._id }

        fetcher("https://socialmediaserver.fly.dev/postFeed/likePost", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                data
            )
        }).then(function (response) {
            console.log(data)
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint
            console.log("i ran")
            console.log(data.likes)
            setLikes(data.likes + 1)
        });
    }

    return (
        <>

            <div class="border-4 rounded-lg border-black-800 m-5 p-3 ">
            <Link to={`/postPage/${props.post._id}`}><h2 class="block text-black-700 text-2xl font-bold mb-2 hover:text-blue-700">{props.post.title}</h2></Link>
                <Link to={`/profilePage/${props.post.username}`} class="block text-gray-700 text-sm font-bold mb-2"> <h4>{props.post.username}</h4></Link>
                <p class="block text-black-500 text-sm  mb-2">{props.post.content}</p>
                <div class="flex">
                    <button onClick={likePost} ><i class="fa-solid fa-thumbs-up"></i> </button>
                    <h4 class="m-2 ">{likes}</h4>
                </div>
                <h4 class="text-sm">created at +{props.post.createdAt}</h4>
            </div >
        </>
    )


}

