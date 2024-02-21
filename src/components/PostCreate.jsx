import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'



const Post = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      


    return (

        <>
             <div>
        <h2> Login here and <Link to="/SignUp">Sign up</Link>  here </h2>
        <form className='login' onSubmit={handleSubmit(handleLogin)} id='clearInput' >
          <label>Title</label>
          <input {...register("title", { required: "You must have a title"})} />
          <p>{errors.title?.message}</p>
          <label >Password:</label>
          <textarea {...register("body", { required: "You must have a body of the post" })} />
          <p>{errors.body?.message}</p>
          <button type="submit">Create</button>
        </form>
      </div >

        </>
    )


}

export default Post;