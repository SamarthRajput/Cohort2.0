import { useEffect, useMemo, useState, memo, useCallback } from 'react'

function CallBack() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 5000)
  }, [])

  //useCallback is not about minimizing the amount of code that is run
  //useCallback is about not rendering a child component, if the function hasnt/doesnt need to change across renders
  //functions are never equal even if there body is the same thats why react doesnot understand that calculateCryptoReturns hasnt chnaged across rerenders and this is where useCallback comes in picture
  //useCallback says ki bhai if you do want to tell me ki bhai function hasnt changed across rerenders please wrap that function inside a useCallback and give me the dependencies 

  const calculateCryptoReturns = useCallback(function(){
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data])

  return (
    <div>
      <Dummy></Dummy>
       <CryptoGainCalculator calculateCryptoReturns={calculateCryptoReturns}></CryptoGainCalculator>
    </div>
  )
}

//Only rerender this function if an input to the function changes which for Dummy it will never happen, which means it will only renders once, and memo lets us skip re-rendering a component when its props are unchanged.
const Dummy = memo(function(){
  return <div>
    <h1>Hi there</h1>
  </div>
})


function CryptoGainCalculator({calculateCryptoReturns}){
  return <div>
    Your crypto return are {calculateCryptoReturns()}
  </div>
}

export default CallBack