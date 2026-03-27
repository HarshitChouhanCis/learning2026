// import React, { useState } from 'react'

// function Accodians() {
//   const [data, setData] = useState(0)
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

//   const handleAcc = (n) => {
//     if (n == data) 
//       { setData(0) } 
//     else {
//       setData(n)
//     }
//   }
//   return (
//     <div style={{ width: "300px", margin: "20px 0px 0px 20px", border: "2px solid", borderRadius: "10px", padding: "10px 10px 10px 10px" }}>
//       {accordionData.map((item, index) => <div style={{ "display": "flex", "justifyContent": "space-between" }} key={index}>
//         <div>
//           <h3>{item.title}</h3>
//           {data == item.id && <p>{item.content}</p>}
//         </div>
//         <div style={{ marginTop: "20px" }}>
//           <button onClick={() => handleAcc(item.id)} >{data == item.id ? "+" : "-"}</button>
//         </div>
//       </div>)

//       }
//     </div>
//   )
// }

// export default Accodians


import React, { useState } from 'react'

function Accodians() {
  const [data, setData] = useState([])
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

  const handleAcc = (n) => {
         setData((pre)=> pre?.includes(n)? pre.filter((i)=> i!==n):[n, ...pre])
  }
  return (
    <div style={{ width: "300px", margin: "20px 0px 0px 20px", border: "2px solid", borderRadius: "10px", padding: "10px 10px 10px 10px" }}>
      {accordionData.map((item, index) => <div style={{ "display": "flex", "justifyContent": "space-between" }} key={index}>
        <div>
          <h3>{item.title}</h3>
          {data?.includes(item.id) && <p>{item.content}</p>}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => handleAcc(item.id)} >{data?.includes(item.id) ? "+" : "-"}</button>
        </div>
      </div>)

      }
    </div>
  )
}

export default Accodians