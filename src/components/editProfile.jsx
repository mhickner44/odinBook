

//get a user profile here with the correct token 
import { useEffect, useState } from "react";
import fetcher from "../helpers/fetcher"
import { useForm } from "react-hook-form";

//make a request for the information that it needs 
//make a simple get request right now

const editProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


    
  const handleUpload = async (data) => {
    event.preventDefault()


    const formData = new FormData();
    formData.append("picture", data.picture[0]);


    fetcher("http://localhost:3000/uploads", {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.

        alert(data)
    });
}

    
      return (
        <>
    
          <form className='login' onSubmit={handleSubmit(handleUpload)} id='clearInput' >
            <label>Picture:</label>
    
            <input
              {...register("picture", {
                required: "image uplaod",
              })}
              type="file"
            />
    
            <button type="submit">Submit</button>
          </form>
    
        </>
      )
    }
    
    export default editProfile;
