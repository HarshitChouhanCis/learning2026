
import React,{useReducer}from 'react'

function UseReducer() {
  const reducer = (state, action) => {
    switch(action.type){
      case "increment":
      return { count: state.count + 1 };
      case "decrement":
      return { count: state.count - 1 };
      default :
      return state
    }
  }
  const initialvalue = {count :0};
  const[state, dispatch] = useReducer(reducer,initialvalue)
  return (
      <>
      <p>{state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  )
}

export default UseReducer
