
//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import fetcher from "../helpers/fetcher"
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment"

const PostPage = ( ) => {

    let fillerINFO={post:{post:{title:"placehodler"}}}
    //get the props passed from the link 
    const [posts, setPosts] = useState(fillerINFO)
    const [comments, setComments] = useState([])

    //use this for username a user whose profile we want to get /could have a helper that gets 
    //the user id?
    const param = useParams()
    //if param id isnt there its a normal requests 
console.log(param.id)
    // use param like in profile page to get the id of the post.

    //needs to be async
    const getPost = async () => {

        const post = await Promise.all([
            await fetcher('http://localhost:3000/postFeed/post', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json', "postID": param.id },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
             
              
                setPosts(data.post)
                setComments(data.comments)
                //store the token here and store in local storage.

            }),

        ]);
    }



    useEffect(() => {
        getPost();
    }, []);


    return (

        <>
            <h1>Post itself</h1 >
      
            <Post post={posts} />
            <h1>comments</h1>
          {  comments.map((e, i) => <Comment comment={e}  key={i}/>)}
         
        </>

    )
}
export default PostPage;
