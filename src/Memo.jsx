import { useState , useMemo} from 'react';
import { createRoot } from 'react-dom/client';

export const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);


  const calculation = useMemo(
    ()=>expensiveCalculation(count)
    ,[count])

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
        <p>Note that this example executes the expensive function also when you click on the Add Todo button.</p>
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};


// export default Memo;


// import React, { useState, useMemo } from "react";

// export default function Parent() {
//   const [count, setCount] = useState(0)
//   const [num, setNum] = useState(1)
//   const calculate = (n) => {
//     console.log("calculating...")
//     return n * 2
//   }
//   const result = useMemo(()=>{return calculate(num)},[num]);
//   return (
//     <>
//      <p>{result}</p>
//      <button onClick={()=>setCount(count+1)}>increase count</button>
//      <button onClick={()=>setNum(num+1)}>increase num</button>
//     </>
//   )
// }


// import React, { useState } from "react";

// export default function App() {
//   const [search, setSearch] = useState("");
//   const [count, setCount] = useState(1);
//   const users = ["Harshit", "Aman", "Rohit", "Ankit", "Rahul"];


//   const filterFn = users.filter((item)=>{
//       console.log("filter");
//       return item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
//   })

//   return(<>
//   <p>{count}</p>
//   <button onClick={()=>setCount(count+1)}>increase count</button>
//   <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
//   {filterFn.map((data)=><ul>
//     <li>{data}</li>
//   </ul>)}  </>)

// }


// import React, { useMemo, useState } from "react";

// export default function Parent(){
//   const[count, setCount] = useState(1)
//   const[search, setSearch] = useState("")
//   const users = ["Harshit", "Aman", "Rohit", "Ankit", "Rahul"];
//   const filterdata = useMemo(()=>{return users.filter((data)=>{
//     console.log("Filtering...");
//     return data.toLowerCase().includes(search.toLowerCase())
//   })},[search]);
//   return(<>
//   <p>{count}</p>
//   <button onClick={()=>setCount(count+1)}>increase count</button>
//   <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
//    {
//     filterdata?.map((data,index)=><ul key={index}>
//       <li>{data}</li>
//     </ul>)
//    }
//   </>)

// }