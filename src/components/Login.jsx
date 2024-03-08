import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'




const Login = () => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const handleLogin = async (data) => {
    event.preventDefault()
   
    fetch("http://localhost:3000/login/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        data
      )
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
     
      if (data != "no user") {
        
        localStorage.setItem("loginToken", data.token)
        //take it back to the main feed
        navigate("/")
        alert("succesful login");
        //store the token here and store in local storage.
      } else {
        alert("incorrect login");
      }

    });
  }


  return (

    <>
      <div>
        <h2> Login here and <Link to="/SignUp">Sign up</Link>  here </h2>
        <form className='login' onSubmit={handleSubmit(handleLogin)} id='clearInput' >
          <label>Username:</label>
          <input {...register("username", { required: "You must have a username" })} />
          <p>{errors.username?.message}</p>
          <label >Password:</label>
          <input {...register("password", { required: "You must have a password" })} />
          <p>{errors.password?.message}</p>
          <button type="submit">Submit</button>
        </form>
      </div >

    </>
  )


}

export default Login;