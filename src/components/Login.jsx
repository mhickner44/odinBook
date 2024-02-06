import { useState } from 'react'

function UserForm({ form }) {
  const [formType, setForm] = useState(false);

  
  function handleClick() {
    setForm(current => !current)
  }

  if (form == true) {
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