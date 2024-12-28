import express from "express"
import logger from "./logger.js";
import morgan from "morgan";

const app=express();
const port =3003;

// app.get("/",(req,res)=>{
//     res.send("Hello from ayam and his coffee")
// })
// app.get("/ice-tea",(req,res)=>{
//     res.send("What ice tea would you prefer?  ")
// })
// app.get("/twitter",(req,res)=>{
//     res.send("ayamdotcom") 
// })

app.use(express.json())



const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

let teaData=[]//store data in array
let nextId=1;//unique id

app.post('/teas',(req,res)=>{
    //data comes from form like req.body.price..
   const{name,price}= req.body//
   const newTea={
    id:nextId++,
    name,
    price,
   }
   teaData.push(newTea);
   res.status(201).send(newTea)  
})

app.get("/teas",(req,res)=>{
  res.status(200).send(teaData)
})

app.get("/teas/:id",(req,res)=>{
  const tea=  teaData.find(t=>t.id===parseInt(req.params.id))
  if(!tea){
    return res.status(404).send("tea not found")
  }
  res.status(200).send(tea)
})

//update tea after putting value

app.put("/teas/:id",(req,res)=>{
    const tea=  teaData.find(t=>t.id===parseInt(req.params.id))
    if(!tea){
        return res.status(404).send("tea not found")
      }
const {name,price}=req.body
tea.name=name;
tea.price=price; 
res.send(200).send(tea)
})

app.delete("/teas/:id",(req,res)=>{
  teaData.findIndex(t=>t.id===parseInt(req.params.id))
  if(index===-1){
    return res.status(404).send("tea not found")
  }
  teaData.splice(index,1)
  return res.status(204).send("deleted");
}
)




app.listen(port, ()=>{
    console.log(`server is running at port${port}....`) 
})