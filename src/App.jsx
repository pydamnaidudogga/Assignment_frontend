import './App.css';
import {BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInsingUp/SignInPage';
import React, { useEffect, useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Average from './components/Average/Average';
import Quotes from './components/Quotes/Quotes';
import Slippage from './components/Slippage/Slippage';
import Header from './components/Header/Header';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('');


  const logouthandle = async ()=>{

    try {

      console.log('logout')
      const response = await fetch('http://localhost:8000/users/logout', {
      method: 'GET',
      credentials: 'include', // This includes cookies in the request
      headers: {
        'Content-Type': 'application/json'
      },
   
    });
      const data = await response.json();
      console.log(data);
      setIsLogin(false)
    } catch (error) {
      console.log(error);  
    }

  }

  


  useEffect(()=>{
        
       
          
    const fetchuser = async () =>{

        try {


          const response = await fetch('http://localhost:8000/users/verify', {
          method: 'POST',
          credentials: 'include', // This includes cookies in the request
          headers: {
            'Content-Type': 'application/json'
          },
       
        });
          const data = await response.json();
          if(response.ok){
            setUser(data.user);
             setIsLogin(true);

          }else{
            setIsLogin(false)
          }
          
        } catch (error) {
          console.log(error);  
        }

    }
         
    fetchuser()   
  
   
  },[])





  return (

    <div className="App">
    <React.StrictMode>
    <BrowserRouter>
    <Header user= {user} isLogin ={isLogin}  logouthandle = {logouthandle}  />
    <Routes>
      <Route  exact path='/'  element={isLogin ?<Navigate to='/dashboard' />: <SignInPage  isLogin={isLogin}  /> } />
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
