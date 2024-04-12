
import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SignUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const [errMsg, setErrMsg] = useState('')

    //use a state to constantly have the 

    function pwdChange() {

        //when the password inputs change they will check this 
        let pwd = watch("password")
        let pwdVerify = watch("passwordVerify")

        if (pwd != pwdVerify) {
            //throw error
            setErrMsg("password do not match")
        } else {
            setErrMsg("")
        }
    }



    const handleSignup = async (data) => {
        event.preventDefault()

        //dont need this
        delete data.password2;


        await fetch("https://socialmediaserver.fly.dev/login/createUser/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                data
            )

        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.

            if (data != "username is taken") {
                window.location.href = 'http://localhost:5173/login'
            } else {
                //help username taken message
                alert(data)
                reset({ username: "", password: '', passwordVerify: '' })
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
                    <p>{errors.username?.message} </p>
                    <input type='password' onChange={pwdChange} {...register("password", {
                        required: "You must have a username",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                            message: "must contain Capital letter,symbol, and number"
                        },
                        onChange: (e) => {
                            pwdChange()

                        },
                    })} />
                    <p>{errors.password?.message}</p>

                    <label >Password:</label>
                    <input type='password' {...register("passwordVerify", {
                        required: "",
                        onChange: (e) => {
                            pwdChange()
                        },
                    })} />
                    <p>{errors.passwordVerify?.message}</p>
                    <p>{errMsg}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    )


}

export default SignUp;