import { useCallback, useEffect, useRef, useState } from 'react'

function UseRef() {

    const [incomeTax, setincomeTax] = useState(20000);
    //useRef is hook which we can used to get reference to DOM elements 
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
    //    document.getElementById("incomeTaxContainer").innerHTML = 10
    //divRef.current is how we can get access to the current reference of that specific div
        divRef.current.innerHTML = 10
    }, 5000);   
  }, [])


  return (
    <div>
        {/* hi there, your income tax returns are <div id='incomeTaxContainer'>{incomeTax}</div> */}
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default UseRef