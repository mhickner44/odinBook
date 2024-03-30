

import './App.css'
import { Link } from "react-router-dom";




function App() {


  //this is will be on the feed page that takes it to the profile page 

  let user = "newTest"


  return (<>
    <div className='header'>
      <h1 id='title'>ODIN BOOk</h1>
      <ul>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/profilePage">profile</Link></li>
        <li><Link to="/SignUp">Sign up</Link></li>
        <li><Link to="/Feed">Feed</Link></li>
        <li><Link to={`/profilePage/${user}`}>{user}</Link></li>
        <li><Link to="/FriendRequests">Friend Requests</Link></li>
        <li><Link to={`/PostPage/65e20b24fb92d070f0398388`}>post id </Link></li>
        <li><Link to={`/editProfile`}>editprofile </Link></li>
      </ul>
    </div>
  </>
  )

}




export default App
