
import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SignUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleSignup = async (data) => {
        event.preventDefault()

        //dont need this
        delete data.password2;


        console.log(data)
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
            } else {
                //help username taken message
            }
            //store the token here and store in local storage.
        });

    }
    return (

        <>
            <div>
                <h2> <Link to="/login">login</Link> here and Sign up  here </h2>
                <form className='signUp' onSubmit={handleSubmit(handleSignup)}  >
                    <label>Username:</label>
                    <input {...register("username", { required: "You must have a username" })} />
                    <label >Password:</label>
                    <p>{errors.username?.message}</p>
                    <input {...register("password", {
                        required: "You must have a username",
                        pattern: {
                            value: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$',
                            message: "must match pattern"
                        }
                    }
                    )} />
                    <p>{errors.password?.message}</p>


                    <label >Password:</label>
                    <input {...register("password2", { required: "You must have a username" })} />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    )


}

export default SignUp;