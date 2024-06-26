import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../helpers/fetcher";
import { Link } from "react-router-dom";
const UserList = () => {

    const [users, setUsers] = useState([])


    const getUsers = async () => {


        fetcher("https://socialmediaserver.fly.dev/requests/users", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data)
            setUsers(data)
            //store the token here and store in local storage.
        });
    }

    async function friendReq(e) {

        let friendedUser = { friendedUser: e }
        fetcher("https://socialmediaserver.fly.dev/requests", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                friendedUser
            )
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.

            alert("request sent!")
        });
    }
    const handleClick = (event) => {
        event.currentTarget.disabled = true;
        //remove the 
    };

    useEffect(() => {
        getUsers()
    }, []);
    // ...


    function User(prop, key) {
        console.log(prop.user)
        return (
        <div key={key.i} class="grid  grid-cols-2  gap-5 m-10 mx-20">
            <Link to={`/profilePage/${prop.user.username}`}><li class="">{prop.user.username}</li></Link>
            <button onClick={(e) => { friendReq(prop.user.id); handleClick(e) }} data-value={prop.user.id} class="bg-blue-500 hover:bg-blue-700 text-white font-bold   rounded focus:outline-none focus:shadow-outline">follow</button>
        </div>)
    }

    return (

        <>
            <h1 class="font-bold text-5xl text-center">USERS</h1>
            <ul class="text-center list-none m-1/4">
            {users.map((e, i) =>
                <User user={e} key={i} />
            )}
            </ul>
        </>
    )


}

export default UserList;