import './App.css';
import {BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInsingUp/SignInPage';
import React, { useEffect, useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Average from './components/Average/Average';
import Quotes from './components/Quotes/Quotes';
import Slippage from './components/Slippage/Slippage';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  


  const logouthandle =()=>{
    setIsLogin(false);
    localStorage.removeItem("authToken");

  }





  useEffect(()=>{

    const params = new URLSearchParams(window.location.search);
     const token = params.get('token'); // Replace 'token' with the actual query parameter name
    
        if(token !== null){
          localStorage.setItem('authToken',token);      
        }
        const authToken = localStorage.getItem('authToken');
          
    const fetchuser = async () =>{

        try {


          const response = await fetch('https://assignment-backend-qu8p.onrender.com/users/verify', {
          method: 'POST',
          credentials: 'include', // This includes cookies in the request
          headers: {
            'Content-Type': 'application/json',
            'authorization': authToken
          },
       
        });
          setIsLoading(false);
          const data = await response.json();
          
          if(response.ok){
            
            setUser(data.user);
            setIsLogin(true);
            // Store the JWT in a secure location
            // localStorage.setItem('token', data.token);

          }
          
        } catch (error) {
          console.log(error);  
        }

    }
       
    fetchuser();
      
   
  },[])





  return (

    <div className="App">
    <React.StrictMode>
    <BrowserRouter>
    <Header user= {user} isLogin ={isLogin}  logouthandle = {logouthandle}  />
    <Routes>
      <Route  exact path='/'  element={isLoading ?<Loading />: <SignInPage  isLogin={isLogin}  /> } />
      <Route  exact path='/quotes'  element={ isLogin ?<Quotes  isLogin={isLogin}  />:<Navigate to='/' /> } />
      <Route  exact path='/average'  element={  isLogin ?<Average  isLogin={isLogin}  />:<Navigate to='/' />  } />
      <Route  exact path='/slippage'  element={  isLogin ?<Slippage   isLogin={isLogin}  />:<Navigate to='/' />  } />
      <Route exact path = '/dashboard' user={user} element = { <Dashboard isLogin={isLogin} /> } />
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
     

    </div>
  );
}

export default App;
