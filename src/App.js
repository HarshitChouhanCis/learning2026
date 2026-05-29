import logo from './logo.svg';
import './App.css';
import Component1 from './Context';
import Reff from './Ref';
import {Memo} from "./Memo"
import WithCallbackExample from './CallbackHook';
import Test from './Test';
import JoinCall from './JoinCall';
import Accodian from './Accodian';
import { useEffect, useLayoutEffect, useState, useRef, use } from 'react';
import Strinpe from './Strinpe';
import Table from './Table';
import Learn from './learn';
import Memoization from './memoc';
import Ask from './Ask';

function parentApp() {

//   useEffect(() => {
//     console.log("useEffect called");
//   });

//     useLayoutEffect(() => {
//     console.log("useLayoutEffect called");
//   });


//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <JoinCall/> */}
//         {/* <Accodian/> */}
//       </header>
//     </div>
//   );
// }


//  const [text, setText] = useState("Wrong Text");


  // useLayoutEffect(() => {
  //   const start = Date.now();

  //   // Heavy blocking loop (3 seconds)
  //   while (Date.now() - start < 3000) {}

  //   console.log("useLayoutEffect finished");
  // }, []);

  return (<>
  {/* <Strinpe/> */}
  <Ask/>
  </>)

}

export default App;
