import { Link } from "react-router-dom";
import { useState } from 'react'
import fetcher from "../helpers/fetcher"

export default function Comment(comment) {
   
    comment = comment.comment
    const [likes, setLikes] = useState(comment.likes)

    //request in post 
    const likePost = async () => {
        event.preventDefault()
      
       let  data = {commentID:comment._id}
        fetcher("http://localhost:3000/postFeed/likeComment", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                data
            )
        }).then(function (response) {
          
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint
            setLikes(data.likes+1)
        });
    }
 

    return (
        <>
  
            <p>{comment.comment}</p>
            <Link to={`/profilePage/${comment.userID}`}><h4>user {comment.userID}</h4></Link>
            <h4>likes:{likes}</h4>
            <button onClick={likePost} >Like post</button>
        </>
    )


}