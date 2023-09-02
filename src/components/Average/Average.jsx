import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import './Average.css'
function Average() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    


    useEffect(()=>{
        
        const getDate = async ()=>{


            try {


                const response = await fetch(`http://localhost:8000/average`, {
                method: 'GET',
                credentials: 'include', // This includes cookies in the request
                headers: {
                  'Content-Type': 'application/json'
                },
             
              });
                const data = await response.json();
                setLoading(false);
                console.log(data);
                if(response.ok){
                   setData(data.data);
                   
      
                }else{
                   setData([{
                    message: "No data"
                   }]);
                }
                
              } catch (error) {
                console.log(error);  
              }

           
        }

        getDate();
    },[])



   
  return ( 
    
   
   loading ? <Loading />:

    <div id='listPage' >
         <ul>
            
         {data.map((item,index) => (
        
          <li key={index}>
            <div className='price-div' >
                <span> Average Buy Proce : {item.average_buy_price} </span> 
                <span> Average Sell Price : {item.average_sell_price}</span>
            </div>     
            
        </li>
        
      ))}
    </ul>
      
    </div>
  )

}

export default Average
