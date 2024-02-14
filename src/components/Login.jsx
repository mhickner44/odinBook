import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { useNavigate } from "react-router-dom";

function UserForm({ form }) {
  const handleLogin = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log((data))

    cancelCourse = () => { 
      document.getElementById("create-course-form").reset();
    }

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

  const handleSignup = async (event) => {
    event.preventDefault()
    cancelCourse()
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.password.value;


    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log((data))


    //make sure passwords match

    if (password === confirmPassword) {
      await fetch("http://localhost:3000/login/createUser/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          data
        )
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data)
        if (data != "username is taken") {
          window.location.href = 'http://localhost:5173/login'
        }
        //store the token here and store in local storage.
      });

    }


  }


 
  

  if (form == true) {
    return (
      // the login form 
      <form className='signUp' onSubmit={handleSignup} id='clearInput' >
        <label>Username:</label>
        <input type="text" name='username'></input>
        <label >Password:</label>
        <input type='password' name='password' ></input>
        <label >Password:</label>
        <input type='password' ></input>
        <button type="submit">Submit</button>
      </form>)

  } else {
    return (
      // the login form 
      <form className='login' onSubmit={handleLogin} id='clearInput' >
        <label>Username:</label>
        <input type="text" name='username' ></input>
        <label >Password:</label>
        <input type='password' name='password'></input>
        <button type="submit">Submit</button>
      </form>)
  }
}




const Login = () => {
  const [formType, setForm] = useState(false);



  function handleClick() {
    setForm(current => !current)
  }

  function Options({ form }) {

    if (form == false) {
      return (

        <><h1>Login or  <a onClick={handleClick}>signUp</a></h1></>
      )
    } else {
      return (

        <><h1><a onClick={handleClick}>Login</a> or  signUp</h1></>
      )
    }


  }

  return (

    <>
      <div>
        <Options form={formType} />
        <UserForm form={formType} />
      </div>

    </>
  )


}

export default Login;