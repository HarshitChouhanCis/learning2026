import React,{useState} from 'react'

function Acco() {
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

   const handleAcc = (id)=>{
    setData((pre)=> pre.includes(id)? pre.filter((pre)=> pre !== id):[id,...data] )
   }
    

  return (
    <div style={{margin:"10px auto", width:"300px", border:"2px solid black", borderRadius:"10px"}}>
      {accordionData.map((item, index) => <div style={{ "display": "flex", "justifyContent": "space-between" }} key={index}>
       <div>
        <div>{item.title}</div>
        {data.includes(item.id)&&<div>{item.content}</div>}
        </div>   
        <button onClick={()=>handleAcc(item.id)}>+</button>
      </div>)
      }
      
    </div>
  )
}

export default Acco

// 123

//160

//200

//206

//ek bacha hai(Rotate)
// Rotate right by k
// non premitive and it calculation
