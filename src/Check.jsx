import React, { memo, useCallback, useMemo, useState } from "react";

// const Button = memo(({ onClick }) => {
//   console.log("Child Render");

//   return (
//     <button onClick={onClick}>
//       Click
//     </button>
//   );
// });

// export default function Check() {
//   const [count, setCount] = useState(0);
//   const [number,setNumber] =  useState(10);
  


//   const increaseNumber =() => {
//     console.log("increase number function is calling");  
//     return number *2 
//   }


//   const newNumber = useMemo(()=>increaseNumber(),[number])

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   },[])

//   return (
//     <>
//       <h1>{count}</h1>
//        <p>new number is {newNumber}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Increase count
//       </button>
//       <button onClick={() => setNumber(number + 1)}>
//         Increase number
//       </button>
//       <Button onClick={handleClick} />
//     </>
//   );
// }

function Check() {
 const[data,setData]=useState([])
    const accordionData = [
    {
      id: 1,
      title: "What is MERN Stack?",
      content:
        "MERN stack is a JavaScript based "
    },
    {
      id: 2,
      title: "What is React?",
      content:
        "React is a JavaScript library used "
    },
    {
      id: 3,
      title: "What is Node.js?",
      content:
        "Node.js is a runtime "
    }
  ];
  const handleAcc =(id)=>{
   setData(pre=> pre.includes(id)?pre.filter((it)=>id !== id) : [...pre,id])
  }

  return (
    <div style={{margin:"100px auto" , width:"300px", border:"2px solid black", borderRadius:"10px", padding:"10px"}}>
    {accordionData.map((item,index)=>
    <div key={index} style={{display:"flex" , justifyContent:"space-between"}}>
     <div>
      <h4>{item.content}</h4>
      {data.includes(item.id) && <div>{item.content}</div>}
     </div>
     <button onClick ={()=>handleAcc(item?.id) }>+</button>
    </div>)}
    </div>
  )
}

export default Check

