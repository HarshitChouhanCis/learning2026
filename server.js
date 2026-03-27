const express = require("express");
const app = express();
const todos = []
const todosid = 1

app.get("/", (req,res)=>{
    res.send("Docker running on 3001");
});

app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json()
    const responseSec = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const datasec = await responseSec.json()
    res.json({
      data: data,
      secondData: datasec,
      success: true
    })
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
)

app.get("/todos",(req,res)=>{
  try{
    res.status(200).json({message:"fetch todos successfully"},{data:todos})
  }catch(error){
    res.status(500).json({message:error.message})
  }
})

app.post("/todos",(req,res)=>{
  const {title,complete} = req.body
  console.log('complete: ', complete);
  console.log('title: ', title);
  try{
    res.status(200).json({message:"fetch todos successfully"},{data:todos})
  }catch(error){
    res.status(500).json({message:error.message})
  }
})

app.listen(3001,()=>{
    console.log("Server running");
});
