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

    fetcher("http://localhost:3000/postFeed/createPost", {
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
    <div>
      <h2> Create a new post </h2>
      <form className='login' onSubmit={handleSubmit(handlePost)} >
        <label>Title</label>
        <input {...register("title", { required: "You must have a title" })} />
        <p>{errors.title?.message}</p>
        <label >Content:</label>
        <textarea {...register("content", { required: "You must have a body of the post" })} />
        <p>{errors.content?.message}</p>
        <button type="submit">Create</button>
      </form>
    </div >

  </>
)

}


export default Post;