import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
function Quotes() {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(()=>{
        
        const getDate = async ()=>{


            try {

                const token = localStorage.getItem('authToken')
                const response = await fetch(`https://assignment-backend-qu8p.onrender.com/quotes`, {
                method: 'GET',
                credentials: 'include', // This includes cookies in the request
                headers: {
                  'Content-Type': 'application/json',
                  'authorization': token
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
                <span> Buy Price : {item.buy_price} </span> 
                <span> sell Price : {item.sell_price}</span>
            </div>
            <div className='source-div' >
                <span>
                Source
                </span>
                <span>
                {item.source}
                </span>

            </div>
            
        </li>
        
      ))}
    </ul>
      
    </div>
  )
}

export default Quotes
