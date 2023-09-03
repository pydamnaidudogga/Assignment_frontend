import React from 'react'
import './Header.css'
function Header(props) {
  return (
    props.isLogin ? 
    <div id='header' >

     <h2>Assignment</h2>
     <div>
     <h2>{props.user.name}</h2>
     <h2 id='logoutButton' onClick={()=>props.logouthandle()} style={{backgroundColor:'lightgray',borderRadius:'30px', fontSize:'16px',padding:'10px',}} >Logout</h2>

     </div>
     

      
    </div>:""
  )
}

export default Header
