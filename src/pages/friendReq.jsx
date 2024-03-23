import { useEffect, useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'





const Login = () => {

    const [friendReq, setFriendReq] = useState([]);



    const getFriendReq = async () => {

        fetcher("http://localhost:3000/requests/pending/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.


            // console.log("this is returned data " +data.requestsID[0].username)

            // var result = Object.values(data.requestsID);
            var result = Object.keys(data.requestsID).map((key) => data.requestsID[key]);
            // data=JSON.stringify(result)
            console.log("this is returned data " + result)


            setFriendReq(result)
            //store the token here and store in local storage.
        });
    }





    async function followUser(event) {

        let data = {}
        data.addFriend = event.currentTarget.getAttribute("data-value")
    
        fetcher("http://localhost:3000/requests/confirmFriend/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                data
            )
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            alert(data)
            getFriendReq()
            //store the token here and store in local storage.
        });

    }



    //in useeffect?
    useEffect(() => {
        getFriendReq();
    }, []);

    return (
        <>
            <div>
                <h2> Friend Requests</h2>

                { //POSTS NEED TO BE DISPLAYED . THEY ARE IN A ARRAY
                    friendReq.map(object => <div>
                        <li>{object.username}</li>
                        <button data-value={object._id} onClick={followUser}>follow</button>
                    </div>
                    )
                }
            </div >

        </>
    )


}

export default Login;