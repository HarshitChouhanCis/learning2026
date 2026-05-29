// import React,{useReducer,useEffect,useLayoutEffect,useState} from "react";

// export default function Parent(){

//   const [open, setOpen] = useState([])
//     const accordionData = [
//       {
//         id: 1,
//         title: "What is MERN Stack?",
//         content:
//           "MERN stack is a JavaScript based "
//       },
//       {
//         id: 2,
//         title: "What is React?",
//         content:
//           "React is a JavaScript library used "
//       },
//       {
//         id: 3,
//         title: "What is Node.js?",
//         content:
//           "Node.js is a runtime "
//       }
//     ];

//     const handleAcc = (id) =>{
//       console.log("id",id);
//          setOpen(open.includes(id)?open.filter((iteam)=> iteam !== id ):[id,...open])
//     }
//     return(<>
//     {accordionData.map((iteam,index)=>
//     <div key={index} style={{"width":"300px" , "margin":"20px", "border":"2px solid", "borderRadius":"20px"}}>
//     <div style={{"justifyContent":"space-between" ,"display":"flex"}}>
//     <div>
//     <h3>{iteam.title}</h3>
//     {open.includes(iteam.id)&& <p>{iteam.content}</p>}
//     </div>
//     <div style={{"marginTop":"20px"}}>
//       <button onClick={()=>handleAcc(iteam.id)}>{open.includes(iteam.id)?"-":"+" }</button>
//     </div>
//     </div>
//     </div>)

//     }
//     </>)
// }


// import React from "react"

// export default function Parent() {
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
//   return (<>
//     <table border="1" cellPadding="10" cellSpacing="0" >
//       <thead>

//         <tr>
//           <th>id</th>
//           <th>title</th>
//           <th>content</th>
//         </tr>
//       </thead>
//       {
//         accordionData.map((iteam, index) =>
//           <tbody key={index} >
//             <tr>
//               <td>{iteam.id}</td>
//               <td>{iteam.title}</td>
//               <td>{iteam.content}</td>
//             </tr>
//           </tbody>
//         )
//       }
//     </table>
//   </>)
// }

// import React, { useState, useContext, createContext } from "react";

// const userContext = createContext()

// function Parent() {
//   const[data , setData] = useState(1)
//   return (
//     <userContext.Provider value={{data, setData}}>
//     <Parent1/>
//     </userContext.Provider>
//   )
// }

// export default Parent


// function Parent1() {

//   return (
//     <div>
//        <Parent2/>
//     </div>
//   )
// }

// function Parent2() {
 
//   return (
//     <div>
//        <Parent3/>
//     </div>
//   )
// }


// function Parent3() {
  
// const {data,setData}= useContext(userContext)
//   return (
//     <div>
//       <p>hello{data}</p>
//       <button onClick={()=>setData((pre)=> Number(pre)+1)}>increase</button>
//     </div>
//   )
// }


// import React,{useRef,useEffect, useState} from 'react'

// function Parent() {
//   const count = useRef(1);
//   const [input,setInput] = useState(0);
//   useEffect(()=>{
//     console.log('count: ', count);
//     count.current= count.current + 1;
//   })
//   return (
//     <div>
//       <p>{count.current}</p>
//       <p>{input}</p>
//       <input onChange={(e)=>setInput(e.target.value)}/>
//     </div>
//   )
// }

// export default Parent


// import React, { useState ,useMemo} from 'react'

// function Parent(){
// const [count,setCount] = useState(0);
// const [data,setdata] = useState(1)

// const calculate = (n)=> {
//   console.log("function is calling")
//   return n*2
// } 

// const result = useMemo(()=>calculate(data),[data])


//   return(
//     <>
//     <h3>{result}</h3>
//     <p>{count}</p>
//     <button onClick={()=> setCount(pre=>pre+1)}>increase count</button>
//     <button onClick={()=>setdata(pre=>pre+1)}>inc data</button>
//     </>
//   )
// }

// export default Parent


// import React, { useCallback, useState } from 'react';
// import { createRoot } from 'react-dom/client';

// Child component that receives a function prop
// const Button = React.memo(({ onclick, text }) => {
//    console.log(`Child ${text} button rendered`);
//   return <button onClick={onclick}>{text}</button>;
// });


// const Button =  React.memo(({fn,text})=>{
//   console.log(`Button rendered ${text}`);
//   return(
//     <button onClick={()=>fn()}>{text}</button>
//   )
// })
// // Parent component without useCallback
// function Parent() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   // This function is recreated on every render
//   const handleClick1 = useCallback(() => {
//     setCount1(count1 + 1);
//   },[count1])

//   const handleClick2 = useCallback(() => {
//     setCount2(count2 + 1);
//   },[count2])

//    console.log("Parent rendered");

//   return (
//     <div>
//       <h2>Without useCallback:</h2>
//       <p>Count 1: {count1}</p>
//       <p>Count 2: {count2}</p>
//       <Button fn={handleClick1} text="Button 1" />
//       <Button fn={handleClick2} text="Button 2" />
//     </div>
//   );
// }
// export default Parent


import { createRoot } from 'react-dom/client';
import useFetch from "./useFetch";

export default function Parent(){
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};