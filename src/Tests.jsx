import React, { useState, useMemo, useCallback } from 'react'

// const Button = React.memo(({fn,btnName}) =>{
//   console.log(btnName);
//   return(
//     <button onClick={fn}>{btnName}</button>
//   )
// })

// function Tests() {
//   const[number, setNumber] = useState(10)
//   const[count, setCount] = useState(1)
//   const double = (num) =>{
//     return num*2
//   } 
//   const data = useMemo(()=>double(number),[number])

//   const handleCount = useCallback(()=>{
//     console.log("handleCount");
//     setCount(pre=> pre+1)
//   },[count])
//   const handleNumber =useCallback(()=>{
//     console.log("handleNumber");
//     setNumber(pre=> pre+1)
//   },[number])

//   return (
//     <div>
//       <p>number is {data}</p>
//       <p>count {count}</p>
//       <Button fn={handleCount} btnName ={"increase Count"}/>
//       <Button fn={handleNumber} btnName ={"increase number"}/>
//     </div>
//   )
// }


// function Tests() {
//   const[data,setData]=useState([])
//   const accordionData = [
//     {
//       id: 1,
//       title: "What is MERN Stack?",
//       content:
//         "MERN stack is a JavaScript based "
//     },
//     {
//       id: 2,
//       title: "What is React?",
//       content:
//         "React is a JavaScript library used "
//     },
//     {
//       id: 3,
//       title: "What is Node.js?",
//       content:
//         "Node.js is a runtime "
//     }]
//     const handleAcc = (id)=>{
//      setData(pre=>pre.includes(id)?pre.filter((item)=> item !==id):[...pre,id])
//     }
//       return (
//         <div style={{ margin: "10px auto", width: "300px", border:"2px solid"}}>
        
//     {accordionData.map((item, index) => <div style={{ "display": "flex", "justifyContent": "space-between" }} key={index}>
//        <div>
//         <div>{item.title}</div>
//         {data.includes(item.id)&&<div>{item.content}</div>}
//         </div>   
//         <button onClick={()=>handleAcc(item.id)}>+</button>
//       </div>)
//       }
//     </div>
//   )
// }

const Button =React.memo(({text,fn})=>{
  console.log("testtst");
  return(<button onClick={fn}>{text}</button>)
})

function Tests() {
  const [data,setData]= useState(10)
  const [count,setCount] = useState(1)
   const double =(data)=> {
    console.log(":memo");
    return data*2 }
  let dataValue = useMemo(()=>double(data),[data])
   const handleCount = useCallback(()=>{
    console.log("handleCount");
    setCount(pre=>pre+1)
   },[count])

  return (
    <div>
      <button onClick={()=>setData(pre=>pre+1)}>inc data</button>
      <p>{count}</p>
      <Button fn={handleCount} text={"increase count"}/>
      <p>{dataValue}</p>
    </div>
  )
}


export default Tests
