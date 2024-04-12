import { Link } from "react-router-dom";
import { useState } from 'react'
import fetcher from "../helpers/fetcher"

export default function Comment(comment) {

    comment = comment.comment
    const [likes, setLikes] = useState(comment.likes)

    //request in post 
    const likePost = async () => {
        event.preventDefault()

        let data = { commentID: comment._id }
        fetcher("https://socialmediaserver.fly.dev/postFeed/likeComment", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                data
            )
        }).then(function (response) {

            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint
            setLikes(data.likes + 1)
        });
    }


    return (
        <>
            <div class="border rounded border-black-800 m-7 p-5">
                <h3 class="text-black-700 text-l font-bold">{comment.comment}</h3>
                <Link to={`/profilePage/${comment.userID}`}><h4 class="block text-gray-700 text-sm font-bold mb-2">{comment.userID}</h4></Link>
                <div class="flex ">
                    <button onClick={likePost} ><i class="fa-solid fa-thumbs-up"></i> </button>
                    <h4 class="m-2">{likes}</h4>
                </div>

            </div>
        </>
    )


}