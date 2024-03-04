

import './App.css'
import { Link } from "react-router-dom";




function App() {


  //this is will be on the feed page that takes it to the profile page 

let id="test"
let value=`/profilePage/${id}`
  return (<>
    <div className='header'>
      <h1 id='title'>ODIN BOOk</h1>
      <ul>
        <li> <Link to="/login">login</Link></li>
        <li> <Link to={value}>profile</Link></li>
        <li><Link to="/SignUp">Sign up</Link></li>
        <li><Link to="/Feed">Feed</Link></li>

        <li><Link to="/Feed">fuck</Link></li>
        {/* <button onClick={getUser}>fuck</button> */}
      </ul>
    </div>
  </>
  )

}




export default App
