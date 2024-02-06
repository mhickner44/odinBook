

import './App.css'
import { Link } from "react-router-dom";




function App() {

  return (

    <>
      <div className='header'>
        <h1 id='title'>ODIN BOOk</h1>
        <ul>
          <li> <Link to="/login">login</Link></li>
        </ul>
      </div>



    </>
  )

}




export default App
