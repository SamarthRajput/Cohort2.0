import { useEffect, useState } from 'react'

function Data() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

    //Good usecases of useEffect is ki if we want to gaurd some code ki bhai this code only runs once when the component mounts which means the first time this rerenders,only the first time this component rerenders
    useEffect(() => {
        setTimeout(() => {
          setBankData({income : 100});
        }, 3000);
    },[])
    
    useEffect(()=>{
        setTimeout(() => {
          setExchangeData({
            returns: 100
          });
        }, 1000);
    },[])

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default Data