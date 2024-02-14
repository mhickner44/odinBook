import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'










const Login = () => {

  const handleLogin = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log((data))



    fetcher("http://localhost:3000/login/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        data
      )
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
      localStorage.setItem("loginToken", data.token)
      //take it back to the main feed
      window.location.href = 'http://localhost:5173/'
      //store the token here and store in local storage.
    });
  }


  return (

    <>
      <div>
        <h2> Login here and <Link to="/SignUp">Sign up</Link>  here </h2>
        <form className='login' onSubmit={handleLogin} id='clearInput' >
          <label>Username:</label>
          <input type="text" name='username' ></input>
          <label >Password:</label>
          <input type='password' name='password'></input>
          <button type="submit">Submit</button>
        </form>
      </div >

    </>
  )


}

export default Login;