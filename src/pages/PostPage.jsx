
//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import fetcher from "../helpers/fetcher"
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment"
import { useForm } from 'react-hook-form'

const PostPage = () => {

    let fillerINFO = { post: { post: { title: "placehodler" } } }
    //get the props passed from the link 
    const [posts, setPosts] = useState(fillerINFO)
    const [comments, setComments] = useState([])
    const [isLoading, setLoading] = useState(true);
    //form 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    //the user id
    const param = useParams()

    //if param id isnt there its a normal requests t.
    const getPost = async () => {

        const post = await Promise.all([
            await fetcher('https://socialmediaserver.fly.dev/postFeed/post', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json', "postID": param.id },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                setPosts(data.post)
                setComments(data.comments)
                setLoading(false);
                //store the token here and store in local storage.

            }),

        ]);
    }

    const handleComment = async (data) => {
        event.preventDefault()

        data.postID = posts._id

        fetcher("https://socialmediaserver.fly.dev/postFeed/createComment", {
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
            alert(data)
            window.location.reload();
        });
    }

    useEffect(() => {
        getPost();
    }, []);





    {
        if (isLoading) {
            return <div className="App">Loading...</div>;
        }
        return (

            <>
         
                <Post post={posts} />
                <h1 class="text-black-700 text-l font-bold mx-8 ">comments</h1>
                {comments.map((e, i) => <Comment comment={e} key={i} />)}

                <form className='newComment' onSubmit={handleSubmit(handleComment)} class="flex mx-7" >
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-auto rounded focus:outline-none focus:shadow-outline w-36">submit</button>
                    <textarea {...register("comment", { required: "leave comment here" })} placeholder="Comment" class="border w-3/4" />
                    <p>{errors.comment?.message}</p>
                </form>
            </>
        );
    }



}
export default PostPage;
