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
      <div class="w-1/2 p-4 m-auto text-center border">
        <h2 class="text-gray-800 text-3xl font-bold mb-2" > Login or <Link to="/SignUp" class="text-blue-500">Sign up</Link>  here </h2>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" className='login' onSubmit={handleSubmit(handleLogin)} id='clearInput' >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input  {...register("username", { required: "You must have a username" })}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <p>{errors.username?.message}</p>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input {...register("password", { required: "You must have a password" } ) }   type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <p>{errors.password?.message}</p>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
      </div >

    </>
  )


}

export default Login;