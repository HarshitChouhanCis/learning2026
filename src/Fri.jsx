// import React,{useEffect, useState, useMemo, useCallback,memo} from "react";

import { useEffect, useState, memo } from "react";

// const Button = memo(({name,fn})=>{
//   console.log("callback",name);
//   return(<button onClick={fn}>{name}</button>)
// })

// export default function Fri() {
//   const[data,setData] = useState(1)
//   const[count,setCount] = useState(10)

//   function handlemult(){
//     console.log("multi handle");
//     return data*2
//   }

//   const multi = useMemo(()=>handlemult(),[data])

//   const handleMultiply = useCallback(() =>{
//     setData(pre=>pre+1)
//   },[data])

//   const handleCount = useCallback(() =>{
//     setCount(pre=>pre+1)
//   },[count])


//   return (<>
//     <p>{multi}</p>
//     <p>count{count}</p>
//     <p>hello</p>
//     {/* <button onClick={handleMultiply}>increase</button> */}
//     <Button name={"increase data"} fn={handleMultiply}/>
//     <Button  name={"increase count"} fn={handleCount}/>
//   </>)
// }






// import React, { useState } from "react";

// function Counter() {
//  const[count,setCount] = useState(5)
//  const[disable, setDisable] = useState(false)

//  const handleCount =()=>{
//   setDisable(true)
//   const intervalId =  setInterval(()=>
//     setCount(pre=>{
//       if(pre == 1){
//         clearInterval(intervalId)
//         setDisable(false)
//         return 5
//       }
//       return pre-1}
//     )
//   ,1000)
//  }

// return(<>
// <button onClick={handleCount} disabled={disable}>count{count}</button>
// </>)
// }
// export default Counter;










// import {useState} from "react";

// function Fri() {

//   const [id, setId] = useState([])
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
//     }
//   ];

//   const handleAcc = (e) =>{
//    setId((pre)=>pre.includes(e)?pre.filter((pre)=> pre !== e):[...pre,e])
//   }
//   return (
//     <div style={{ margin: "10px auto", width: "300px", border: "2px solid black", borderRadius: "10px" }}>
//       {accordionData.map((item, index) =>
//         <div key={index} style={{ margin: "10px", display: "flex", justifyContent: "space-between" }}>
//           <div><h3>{item.title}</h3>
//             {(id.includes(item.id)) && <p>{item.title}</p>}
//           </div>
//           <button style={{height:"30px",marginTop:"20p-"}} onClick={()=>handleAcc(item.id)}>{id.includes(item.id)? "--" : "+" }</button>
//         </div>)}
//     </div>)

// }

// export default Fri






// import React from 'react'

// function Fri() {

//   const tableData = [
//   {
//     id: 1,
//     title: "Learn React",
//     description: "Understand hooks and lifecycle",
//     priority: "High",
//     completed: false,
//     createdAt: "2026-02-24"
//   },
//   {
//     id: 2,
//     title: "Build API",
//     description: "Create CRUD with Node + Express",
//     priority: "Medium",
//     completed: true,
//     createdAt: "2026-02-23"
//   },
//    {
//     id: 3,
//     title: "Build API3",
//     description: "Create CRUD with Node + Express3",
//     priority: "Medium3",
//     completed: true,
//     createdAt: "2026-02-23"
//   },
//    {
//     id: 4,
//     title: "Build API4",
//     description: "Create CRUD with Node + Express4",
//     priority: "Medium4",
//     completed: true,
//     createdAt: "2026-02-23"
//   }
// ];
//   return (
//     <div>
//       <table border="1" cellSpacing="0"> 
//        <thead>
//         <tr>
//            <th>title</th>
//            <th>description</th>
//            <th>priority</th>
//            <th>completed</th>
//            <th>createdAt</th>
//         </tr>
//        </thead>
//        <tbody>
//         {tableData.map((i , index)=>
//         <tr key={index}>
//           <td>{i.title}</td>
//           <td>{i.description}</td>
//           <td>{i.priority}</td>
//           <td>{i.completed.toString()}</td>
//           <td>{i.createdAt}</td>
//         </tr>
//         )}
//        </tbody>
//       </table>
//     </div>
//   )
// }

// export default Fri



// import React, { useState, useEffect ,useMemo, useCallback} from 'react'

// const Button=React.memo(({fun,text})=>{
//   console.log("text",text);
//   return (
//     <button onClick={fun}>{text}</button>
//   )
// })

// function Fri() {
//   const [number, setNumber] = useState(10)
//   const [count, setCount] = useState(1)

//   const doubleCountFn = (count) => {
//     return count * 2
//   }

//   const doubleCount = useMemo(()=>doubleCountFn(count),[count])
//   const handleNumber = useCallback(() => {
//     console.log('handleNumber: ');
//     setNumber(pre => pre + 1)
//   },[number])
//   const handleCount = useCallback(() => {
//     console.log('handleCount: ');
//     setCount(pre => pre + 1)
//   },[count])

//   return (
//     <div>
//       <p>double count is {doubleCount}</p>
//       <p>number is {number}</p>
//       <Button fun={handleCount} text={"increase count"}/>
//       <Button fun={handleNumber} text={"increase number"}/>
//     </div>
//   )
// }

// export default Fri


// export default function useFetch(url) {
//   const [data, setData] = useState(null)
  
//   useEffect(() => {
  
//     if (!url) return;
  
//     fetch(url).then(res => res.json)
//     .then(data => setData(data))
//     .catah((err) => console.error(err))
//   }, [url]);

//   return [data];
// }


// What is React Fiber?
// What causes re-rendering in React? 
// What is reconciliation?
// 12. Why state updates are asynchronous?

// Difference between:
// setCount(count + 1)
// setCount(prev => prev + 1)

// 14. Explain useEffect lifecycle.
// 15. How to prevent infinite re-renders in useEffect?
// 16. What is cleanup function?

// Build Accordion
// 32. Build Todo App
// 33. Build Pagination
// 34. Build Infinite Scroll
// 35. Build Search Autocomplete
// 36. Build Countdown Timer
// 37. Build Nested Comments
// 38. Build Star Rating Component
// 39. Build OTP Input Component
// 40. Build Modal Popup

//Explain Redux flow.
// dispatch → reducer → store → UI



// Performance Optimization
// 46. How to optimize React app?

// Topics:

// Memoization
// Lazy loading
// Code splitting
// Virtualization
// 47. What is React.memo?
// 48. What is code splitting?
// 49. Explain lazy loading.
// React.lazy()
// Suspense
// Redux Questions
// 50. What is Redux Toolkit?
// 51. Explain createSlice.
// 52. Explain Redux flow.
// dispatch → reducer → store → UI
// 53. Difference between Context API and Redux?
// 54. What is middleware?
// 55. Explain RTK Query.
// HTML/CSS Questions
// 56. Difference between:
// relative
// absolute
// fixed
// sticky
// 57. Difference between:
// div
// span
// 58. What are semantic tags?
// 59. Explain Flexbox.
// 60. Explain CSS Grid.
// Real Interview Coding Style Questions
// 61. Why React does not render booleans?
// 62. Why state should not mutate directly?
// 63. Why keys are important in React?
// 64. Why hooks should not be called conditionally?
// 65. Explain stale closure problem.
// Advanced Questions
// 66. Explain React rendering lifecycle.
// 67. Difference between mounting and updating.
// 68. Explain batching in React.
// 69. What is concurrent rendering?
// 70. Explain React Fiber architecture.
// Common Zomato Interview Focus

// Usually focuses on:

// Strong JavaScript fundamentals
// React hooks
// Machine coding
// API handling
// Optimization
// Clean coding approach
// Problem solving
// Most Important Machine Coding Topics

// Practice these deeply:

// Todo App
// Accordion
// Infinite Scroll
// Search Debounce
// Pagination
// Modal
// OTP Input
// Table Sorting
// Countdown Timer
// Nested Comments


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

  const multi = ()=>handlemult()

  const handleMultiply = () =>{
    setData(pre=>pre+1)
  }

  const handleCount = () =>{
    setCount(pre=>pre+1)
  }


  return (<>
    <p>{multi}</p>
    <p>count{count}</p>
    <p>hello</p>
    {/* <button onClick={handleMultiply}>increase</button> */}
    <Button name={"increase data"} fn={handleMultiply}/>
    <Button  name={"increase count"} fn={handleCount}/>
  </>)
}
