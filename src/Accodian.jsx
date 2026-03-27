import React, { useState } from 'react'

function Accodian() {
  const [open, setOpen] = useState([])
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

  const handleClick = (key) => {
    setOpen((pre) => pre.includes(key) ? pre.filter((item) => item !== key) : [key, ...pre])
  }


  return (
    <div style={{ width: "600px", margin: "20px auto" }}>
      {accordionData?.map((iteam, key) =>
        <div style={{ borderRadius: "20px", border: "2px solid white", display: "flex", justifyContent: "space-between", alignItems: "center"}} key={key}>
          <div >
            <h3>{iteam.title}</h3>
            {open?.includes(key) && <p>{iteam.content}</p>}
          </div>

          <button style={{
            // width: "35px",
            // height: "35px",
            // borderRadius: "50%",
            // border: "none",
            // background: "#007bff",
            // color: "white",
            // fontSize: "18px",
            // cursor: "pointer",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // transform: open?.includes(key) ? "rotate(180deg)" : "rotate(0deg)"
          }} onClick={() => handleClick(key)}>&#8964;</button>
        </div>)
      }
    </div>
  )
}

export default Accodian
