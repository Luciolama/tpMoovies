import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/lista", (req, res) => {
  res.json(moovies);
});

app.post("/lista", (req,res) =>{
  moovies.push(req.body)
  console.log(req.body);
  res.status(200).json({message:'ok'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
