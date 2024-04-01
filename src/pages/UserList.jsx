import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../helpers/fetcher";
const UserList = () => {

    const [users, setUsers] = useState([])


    const getUsers = async () => {
    

        fetcher("http://localhost:3000/requests/users", {
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
  
        let friendedUser = { friendedUser: e}
        fetcher("http://localhost:3000/requests", {
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


    function User(prop,key) {
        console.log(prop.user)
        return (<div key={key.i}>
            <li>{prop.user.username}</li>
            <button onClick={(e)=> {friendReq(prop.user.id);handleClick(e)}} data-value={prop.user.id}>follow user</button>
        </div>)
    }

    return (

        <>
            <div>users</div>
            {users.map((e,i) => 
               <User user={e} key={i}/>
            )}
        </>
    )


}

export default UserList;