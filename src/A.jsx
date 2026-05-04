// import React, { useState,useMemo} from "react";

// function A() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   function expensiveCalculation(num) {
//     console.log("Running...");
//     return num * 2;
//   }

//   let result = useMemo(()=>expensiveCalculation(count),[count])

//   return (
//     <div>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase Count
//       </button>

//       <input 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//       />
//     </div>
//   );
// }

// export default A;


import React, { useState,useCallback} from "react";

function Child({ handleClick }) {
  console.log("Child rendered");

  return <button onClick={handleClick}>Click</button>;
}

function A() {
  const [count, setCount] = useState(0);

  const handleClick= useCallback(()=> {
    console.log("Clicked");
  },[])

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default A;