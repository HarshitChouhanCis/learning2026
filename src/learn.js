import React,{useState,useEffect} from 'react'

function Learn() {
  const[data,setData] = useState(10)
  const[count, setCount] = useState(0)
  useEffect(()=>{
   setCount(count+1)
  },[data])

  return (
    <div>
      <p>data {data}</p>
      <p>count {count}</p>
      <button onClick={()=>setData(data+1)}>update data</button>
    </div>
  )
}

export default Learn
