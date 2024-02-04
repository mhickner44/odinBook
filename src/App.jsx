import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function userForm() {

  if (formType == true) {
    return (
      // the login form 
      <form className='signUp' action=''>
        <label>Username:</label>
        <input type="text" ></input>
        <label >Password:</label>
        <input type='password' ></input>
        <label >Password:</label>
        <input type='password' ></input>
        <button>Submit</button>
      </form>)

  } else {
    return (
      // the login form 
      <form className='login' action=''>
        <label>Username:</label>
        <input type="text" ></input>
        <label >Password:</label>
        <input type='password' ></input>
        <button>Submit</button>
      </form>)
  }


  function App() {
    const [formType, setForm] = useState();

    //define what the form does by if they hit the sign up button
    // function submit(formData) {
    //   //submit either a signup or a login based on the options 
    //   const query = formData.get("query");
    //   alert(`You searched for '${query}'`);
    // }

    return (
      <>
        <div>
          <userForm />
        </div>

      </>
    )


  }




  export default App
