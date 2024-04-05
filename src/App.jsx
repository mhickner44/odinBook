

import './index.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {



  const navigate = useNavigate()
  //this is will be on the feed page that takes it to the profile page 


  useEffect(() => {
    if (localStorage.loginToken) {
      navigate("/feed")

    } else {
      navigate("/login")
    }
  }, []);





  return (<>


    {/* check whether they are logged in or not and redirect them to the crorect desitinoatino */}
    <div>
      <li><Link to="/login">login</Link></li>
      <li><Link to="/profilePage">profile</Link></li>

    </div >
  </>
  )

}




export default App
