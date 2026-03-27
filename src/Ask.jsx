import React, { useState } from 'react'
import Osama from './Osama';

function Ask() {
  const [pass, setPass] = useState("")
  const hasUpperLower = /[a-z]/.test(pass) && /[A-Z]/.test(pass);
  const isLength = pass.length >= 8;
  const hasNumber = /\d/.test(pass)
  const strength = (hasUpperLower ? 1 : 0) + (isLength ? 1 : 0) + (hasNumber ? 1 : 0)
  const Osama = () => {
    return (strength / 3) * 100 + "%"
  }

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <p>Enter Password </p>
      <input value={pass} onChange={(e) => setPass(e.target.value)} />
      <div style={{ height: "10px", background: "gray", margin: "10px" }}>
        <div style={{
          width: Osama()
          , height: "100%",
          background: strength === 1
            ? "red"
            : strength === 2
              ? "orange"
              : strength === 3
                ? "green"
                : "transparent",
          transition: "0.3s"
        }}></div>
      </div>
      <ul>
        <li style={{ color: isLength ? "green" : "red" }}>please enter atleast 8 characters</li>
        <li style={{ color: hasUpperLower ? "green" : "red" }}>please atleast enter one lowercase and one uppercase characters</li>
        <li style={{ color: hasNumber ? "green" : "red" }}>Contains a number</li>
      </ul>
    </div>
  )
}

export default Ask
