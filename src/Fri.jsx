import React,{useEffect, useState, useMemo, useCallback,memo} from "react";


const Button = memo(({name,fn})=>{
  console.log("callback",name);
  return(<button onClick={fn}>{name}</button>)
})

export default function Fri() {
  const[data,setData] = useState(1)
  const[count,setCount] = useState(10)
  
  function handlemult(){
    console.log("multi handle");
    return data*2
  }
   
  const multi = useMemo(()=>handlemult(),[data])

  const handleMultiply = useCallback(() =>{
    setData(pre=>pre+1)
  },[data])

  const handleCount = useCallback(() =>{
    setCount(pre=>pre+1)
  },[count])


  return (<>
    <p>{multi}</p>
    <p>count{count}</p>
    <p>hello</p>
    {/* <button onClick={handleMultiply}>increase</button> */}
    <Button name={"increase data"} fn={handleMultiply}/>
    <Button  name={"increase count"} fn={handleCount}/>
  </>)
}

