import React, { useState } from 'react'

function Table() {
//   const data = [{
//     name: "John Doe",
//     age: 30,
//     email: "assasa"
//   },
//   {
//     name: "John Doe1",
//     age: 31,
//     email: "assasa1"
//   }
//     , {
//     name: "John Doe2",
//     age: 32,
//     email: "assasa2"
//   }, {
//     name: "John Doe3",
//     age: 33,
//     email: "assasa3"
//   }]
//   return (
//     <>
//       <div>
//         <table border="1" cellPadding="10" cellSpacing="0">
//           <thead>
//             <tr>
//               <th>name</th>
//               <th>age</th>
//               <th>email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, key) => <tr>
//               <td>
//                 {item.name}
//               </td>
//               <td>
//                 {item.age}
//               </td>
//               <td>{item.email}</td></tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }
// ----------------------------------------------

const todos = [
  {
    id: 1,
    title: "Learn React",
    description: "Understand hooks and lifecycle",
    priority: "High",
    completed: false,
    createdAt: "2026-02-24"
  },
  {
    id: 2,
    title: "Build API",
    description: "Create CRUD with Node + Express",
    priority: "Medium",
    completed: true,
    createdAt: "2026-02-23"
  },
   {
    id: 3,
    title: "Build API3",
    description: "Create CRUD with Node + Express3",
    priority: "Medium3",
    completed: true,
    createdAt: "2026-02-23"
  },
   {
    id: 4,
    title: "Build API4",
    description: "Create CRUD with Node + Express4",
    priority: "Medium4",
    completed: true,
    createdAt: "2026-02-23"
  }
];

const [manage, SetManage] = useState([])  

const handleToDO = (id) =>{
  SetManage((pre)=>pre.includes(id)? pre.filter((item)=> item !== id ) :[id,...pre])
  
}


return(<>
{
  todos.map((items, keys)=>
     <div key={keys}  style={{maxWidth: "600px",border:"2px solid black", display:"flex", justifyContent:"space-between" , margin:"0 auto", borderRadius:"8px"}}>
        <div><h3>{items.title}</h3>
        {manage.includes(items.id) && <div><p>{items.description}</p>
        <p>{items.priority}</p></div>}</div>
        <button onClick={()=>handleToDO(items.id)}>{manage.includes(items.id)?"-":"+"}</button>
     </div>
  )
}

</>)
}

export default Table


  // border="1"
  // cellpadding="10"
  // cellspacing="0"
  // width="100%"
  // align="center"
  // bgcolor="#f2f2f2">