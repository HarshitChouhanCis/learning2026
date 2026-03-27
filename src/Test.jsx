// import React, { useEffect, useLayoutEffect, useState } from 'react'

// function Test() {
//   const [data, setData] = useState("1")
//   const [data1, setData1] = useState("2")


//   // useEffect(() => {
//   //   console.log("hello");

//   //   setData("hello how are you useEffect")
//   // }, [])
// useLayoutEffect(() => {
//   const rect = tooltipRef.current.getBoundingClientRect();

//   setPosition({
//     top: rect.top - 40,
//     left: rect.left
//   });
// }, []);
//   // useLayoutEffect(() => {
//   //   console.log("hello1");
//   //   setTimeout(() => {
      
//   //     setData1("hello how are you11 useLayoutEffect")
//   //   }, 3000);
//   // }, [])
//   return (
//     <div>
//       <h1>{data}</h1>
//       <h1>{data1}</h1>


//     </div>
//   )
// }

// export default Test

import React, { useLayoutEffect, useRef, useState } from "react";

function Test() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const boxHeight = boxRef.current.offsetHeight;
    setHeight(boxHeight);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          padding: "30px",
          backgroundColor: "lightgreen"
        }}
      >
        Hello React
      </div>

      <h2>Box Height: {height}px</h2>
    </div>
  );
}

export default Test;