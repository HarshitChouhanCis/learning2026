const express = require("express")
const PORT = process.env.PORT || 5002;
const app = express()
app.use(express.json());

let todos = []
let todosid = 1

const check=(req,res,next)=>{
console.log("middleware");
req.user={
  id:1,
  name:"harshit"
}
  next()
}
// app.use(check)

app.get("/todos",check,(req,res)=>{
  console.log("req.user",req.user);
  try{
    res.status(200).json({message:"fetch todos successfully", data:todos})
  }catch(error){
    res.status(500).json({message:error.message})
  }
})

app.post("/todos",check,(req,res)=>{
  const {title,complete} = req.body
  if(!title){
    return res.status(400).json({message:"title is required"})
  }
  try{
    const aa  = {
      id: todosid++,
      title:title,
      complete:complete||false
    }
    todos.push(aa)
    res.status(200).json({message:"data todos successfully",data:todos})
  }catch(error){
    res.status(500).json({message:error.message})
  }
})


app.put("/todos/:id",(req,res)=>{
  const id = parseInt(req.params.id)
  const {title,complete} = req.body
 
  const data = todos.find(i=> i.id === id)
  if(!data){
    return res.status(400).json({message:"title is required"})
  }
  if(title !== undefined){
    data.title = title
  }
   if(complete !== undefined){
    data.complete = complete
  }
  
  return res.status(200).json({ success: true, data: data})
})


app.delete("/todos/:id",(req,res)=>{
   const id = parseInt(req.params.id)
   const data = todos.findIndex(i=>i.id === id)
   if(data == -1){
    return res.status(400).json({message:"title not found"})
   }else{
    todos.splice(data,1)
    return res.status(200).json({message:"title delete successfully"})
   }
   
})
app.listen(PORT, () => {
  console.log("app is running on 5000");
})