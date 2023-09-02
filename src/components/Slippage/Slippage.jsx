import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
function Slippage() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
  

    useEffect(()=>{
        
        const getDate = async ()=>{


            try {


                const response = await fetch(`http://localhost:8000/slippage`, {
                method: 'GET',
                credentials: 'include', // This includes cookies in the request
                headers: {
                  'Content-Type': 'application/json'
                },
             
              });
                const data = await response.json();
                setLoading(false);
       
                if(response.ok){
                   setData(data.data);
                    console.log(data);
      
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
                <span> Buy Price Slippage : {item.buy_price_slippage} </span> 
                <span> sell Price Slippage : {item.sell_price_slippage}</span>
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

export default Slippage
