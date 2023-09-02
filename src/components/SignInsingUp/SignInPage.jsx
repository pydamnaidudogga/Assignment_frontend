
import { useEffect } from 'react';
import './SignInSignUp.css'
import { Navigate } from 'react-router-dom';

function SignInPage(props) {
    const handleLogin = async ()=>{

        window.open('http://localhost:8000/auth/google', '_self');

    }
  

   useEffect(()=>{
    if(props.isLogin){
      // Navigate('/dashboard');
    }
   })



   


  return (
    props.isLogin ? <Navigate to='/dashboard' />:
    <div id='sigin-container' >

        <div id="signin-signup" >
            

           
                <button id="google-login-button" onClick={()=>handleLogin()}  >
                    <img src="https://i.ibb.co/cgTYRDJ/google-logo-png-29546.png" alt="Google" width={24} height={24} style={{marginRight:"2px"}} />
                    <span>Sign in with Google</span>
                </button>

            

        </div>
      
    </div>
  )
  
}

export default SignInPage
