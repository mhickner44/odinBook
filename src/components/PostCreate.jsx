import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'



const Post = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate=useNavigate();

  const handlePost = async (data) => {
    event.preventDefault()

    fetcher("https://socialmediaserver.fly.dev/postFeed/createPost", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        data
      )
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      // `data` is the parsed version of the JSON returned from the above endpoint
      alert(data)
      navigate("/Feed")
    });
  }



return (

  <>
    <div class="p-6 m-auto text-center w-3/4 h-3/4">
      <h2 class="text-7xl	font-bold">New Post </h2>
      <form className='login' onSubmit={handleSubmit(handlePost)}  class='text-left'>
        <label class="font-bold text-3xl w-full">Title</label>
        <input {...register("title", { required: "You must have a title" }) } class="font-bold text-xl w-full border-2 rounded-md	p-1" />
        <p>{errors.title?.message}</p>
        <label  class="font-bold text-3xl w-full">Content:</label>
        <textarea {...register("content", { required: "You must have a body of the post" })} class="w-full border-2	rounded-md p-1"/>
        <p>{errors.content?.message}</p>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-auto rounded focus:outline-none focus:shadow-outline w-36">Post</button>
      </form>
    </div >

  </>
)

}


export default Post;