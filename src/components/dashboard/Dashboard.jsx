import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Dashboard.css';

function Dashboard(props) {

  return (
    props.isLogin ?
    <div id='dashboard' >
      
      <div className="container">
        <Link to='/quotes' >
        <div id="quotes" className='box'>
          <h3>
            Quotes
          </h3> 

        </div>
        </Link>
        <Link to='/average' >
        <div id="average" className='box' >

          <h3>
            Average
          </h3> 

        </div>
        </Link>
        <Link to='/slippage' >
        <div id="slippage" className='box' >
         <h3>
            Slippage
          </h3> 

        </div>
        </Link>
      </div>
      {/* <button  onClick={()=>props.logouthandle()} id="logout">
        logout
      </button> */}
    </div>:<Navigate to='/' />
  )
}

export default Dashboard
