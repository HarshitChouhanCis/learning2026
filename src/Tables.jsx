import React from 'react'

function Tables() {
  const todos = [
    {
      id: 1,
      title: "Learn React",
      description: "Understand hooks and lifecycle",
      priority: "High",
      completed: false,
      createdAt: "2026-02-24"
    },
    {
      id: 2,
      title: "Build API",
      description: "Create CRUD with Node + Express",
      priority: "Medium",
      completed: true,
      createdAt: "2026-02-23"
    },
    {
      id: 3,
      title: "Build API3",
      description: "Create CRUD with Node + Express3",
      priority: "Medium3",
      completed: true,
      createdAt: "2026-02-23"
    },
    {
      id: 4,
      title: "Build API4",
      description: "Create CRUD with Node + Express4",
      priority: "Medium4",
      completed: true,
      createdAt: "2026-02-23"
    }]
  return (
    <div>
      <table border="1" cellPadding={12}>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>priority</th>
            <th>completed</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.priority}</td>
              <td>{item.completed ? "Yes" : "No"}</td>
              <td>{item.createdAt}</td>
            </tr>
          )
          }
        </tbody>
      </table>

    </div>
  )
}

export default Tables
