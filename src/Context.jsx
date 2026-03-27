import { useContext, createContext, useState } from "react";

const abc = createContext()
export default function Component1() {
  const [data, setData] = useState("hello11111111111111")

  return (<>
  <abc.Provider value={data}>
    <Component2></Component2>
  </abc.Provider>
  </>)
}


function Component2(){
 
  return(
    <>
   <Component3/>
    </>
  )
}

function Component3(){
  const myData = useContext(abc)
  return(
    <>
    <p>{myData}</p>
    </>
  )
}


