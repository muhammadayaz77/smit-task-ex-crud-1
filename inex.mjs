import express from 'express'
// first commit 

let app = express();
app.use(express.json())
// second commit
let items = []
app.get('/',(req,res) => {
  res.json(items);
})
// third commit
app.post('/api/data',(req,res) => {
  // Forth commit
  let newItem = {
      id : items.length + 1,
      name : req.body.name,
  }
  items.push(newItem);
  res.status(201).json({message : 'data is Post',newItem});
  // Fifth commit
})
