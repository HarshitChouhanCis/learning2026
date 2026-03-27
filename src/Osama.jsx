import React from 'react'

function Osama() {
    const data = [{
    name: "John Doe",
    age: 30,
    email: "assasa"
  },
  {
    name: "John Doe1",
    age: 31,
    email: "assasa1"
  }
    , {
    name: "John Doe2",
    age: 32,
    email: "assasa2"
  }, {
    name: "John Doe3",
    age: 33,
    email: "assasa3"
  }]

  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => <tr key={key}>
            <td>
              {item.name}
            </td>
            <td>
              {item.age}
            </td>
            <td>{item.email}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Osama
