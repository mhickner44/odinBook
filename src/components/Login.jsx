import { useState } from 'react'

function UserForm({ form }) {

  const [formType, setForm] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log((data))
    
    const answer=await fetch('http://localhost:3000/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        data
      )
    }).then(function(response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    }).then(function(data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      
      //store the token here and store in local storage.
    });
  }
 
  function handleClick() {
    setForm(current => !current)
  }

  if (form == true) {
    return (
      // the login form 
      <form className='signUp' onSubmit={handleSubmit} >
        <label>Username:</label>
        <input type="text" name='username'></input>
        <label >Password:</label>
        <input type='password'  name='password'></input>
        <label >Password:</label>
        <input type='password'  ></input>
        <button type="submit">Submit</button>
      </form>)

  } else {
    return (
      // the login form 
      <form className='login' onSubmit={handleSubmit}  >
        <label>Username:</label>
        <input type="text" name='username' ></input>
        <label >Password:</label>
        <input type='password'  name='password'></input>
        <button type="submit">Submit</button>
      </form>)
  }
}



const Login = () => {
  const [formType, setForm] = useState(false);

  function handleClick() {
    setForm(current => !current)
  }

  return (

    <>
      <div>
        <h1>Login or  <a onClick={handleClick}>signUp</a></h1>
        <UserForm form={formType} />
      </div>

    </>
  )


}

export default Login;