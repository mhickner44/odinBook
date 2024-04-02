
import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SignUp = () => {
    const navigate = useNavigate();
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
        // data = delete data.passwordVerify;


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

            if (data != "username is taken") {
                navigate("/login")
                alert("account Created")
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
            <div className='w-1/2 p-4 m-auto text-center border'>
                <h2 class="text-gray-800 text-3xl font-bold mb-2"> <Link to="/login" class="text-blue-500">login</Link> or Sign up here </h2>
                <form className='signUp' onSubmit={handleSubmit(handleSignup)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div class="mb-4">
                        <label  class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                        <input {...register("username", { required: "You must have a username" })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="mb-4">
                        <label  class="block text-gray-700 text-sm font-bold mb-2" >Password:</label>
                        <p>{errors.username?.message} </p>
                        <input type='password' onChange={pwdChange} {...register("password", {
                            required: "You must have a password",
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                                message: "must contain Capital letter,symbol, and number"
                            },
                            onChange: (e) => {
                                pwdChange()

                            },
                        })}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        <p>{errors.password?.message}</p>
                    </div>
                    <div class="mb-4">
                        <label  class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input type='password' {...register("passwordVerify", {
                            required: "",
                            onChange: (e) => {
                                pwdChange()
                            },
                        })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <p>{errors.passwordVerify?.message}</p>
                        <p>{errMsg}</p>
                    </div>
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </form>
            </div>

        </>
    )


}

export default SignUp;