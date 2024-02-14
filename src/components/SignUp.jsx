
import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'

const SignUp = () => {


    const handleSignup = async (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const confirmPassword = event.target.elements.password.value;


        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log((data))

        document.getElementById("signUpForm").reset();
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
                }else{
                    //help username taken message
                }
                //store the token here and store in local storage.
            });

        }else{
            ///passwords didnt matc

        }


        
    }
    return (

        <>
            <div>
                <h2> <Link to="/login">login</Link> here and Sign up  here </h2>
                <form className='signUp' onSubmit={handleSignup} id='signUpForm' >
                    <label>Username:</label>
                    <input type="text" name='username'></input>
                    <label >Password:</label>
                    <input type='password' name='password' ></input>
                    <label >Password:</label>
                    <input type='password' ></input>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    )


}

export default SignUp;