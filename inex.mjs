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
