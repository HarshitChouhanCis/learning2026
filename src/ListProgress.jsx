import React, { useState } from "react"

function ListProgress() {
  const [input, setInput] = useState("")

  const lowerCase = /[a-z]/.test(input)
  const UpperCase = /[A-Z]/.test(input)
  const isLength = input.length >= 8;
  const containNumber = /[0-9]/.test(input)

  const strength = (lowerCase ? 1 : 0) + (UpperCase ? 1 : 0) + (isLength ? 1 : 0) + (containNumber ? 1 : 0)
  const handleColor = () => {
    if (strength === 4) return "green"
    else if (strength === 3 || strength === 2) return "blue"
    else if (strength === 1) return "red"
    else return "gray"
  }
  const handleBar = () => {
    return `${strength * 25}%`;
  }

  const handleErrorColor = (prop) =>{
    return (!prop?"red":"green")
  }

  return (<div style={{ margin: "10px auto", width: "300px" }}>
    <p>please enter password</p>
    <input placeholder="enter password" value={input} onChange={(e) => setInput(e.target.value)} />
    <div style={{ height: "10px", backgroundColor: "gray", marginTop: "10px" }}>
      <div style={{height: "100%", width: handleBar(), backgroundColor: handleColor() ,transition:"0.5s"}}>

      </div>
    </div>
    <p style={{ color: handleErrorColor(lowerCase) }}>Must contain a lowercase letter</p>
    <p style={{ color: handleErrorColor(UpperCase)}}>Must contain an uppercase letter</p>
    <p style={{ color: handleErrorColor(isLength)}}> Password must be at least 8 characters</p>
    <p style={{ color: handleErrorColor(containNumber) }}>must contain a number</p>
  </div>)
}

export default ListProgress