import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Parent from "./Parent"
import Learn from './learn';
import Memoization from './memoc';
import Accodian from './Accodian';
import Accodians from './Accodians';
import Osama from './Osama';
import PasswordValidator from './Pass';
import Ask from './Ask';
import ListProgress from './ListProgress';
import Acco from './Acco';
import Tables from './Tables';
import A from './A';
import Fri from './Fri';

import Tests from './Tests';
import Check from './Check';
import WithCallbackExample from './CallbackHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <Fri/> */}
<WithCallbackExample/>
</>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
