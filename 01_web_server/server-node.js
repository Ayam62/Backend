const http=require("http")

const hostName="127.0.0.1"
const port =70;

const server=http.createServer((req,res)=>{
   if (req.url==="/") {
     res.statusCode=200;
     res.setHeader("Content-Type","text/plain")
     res.end("Hello Ayam. How are you?")
   }
   else if (req.url==="/ice-tea") {
     res.statusCode=200;
     res.setHeader("Content-Type","text/plain")
     res.end("Give ice tea")
   }
   else{  
    res.statusCode=400;
     res.setHeader("Content-Type","text/plain")
     res.end("404 not found")
   }
   
})

server.listen(port,()=>{
    console.log(`server is listening to http://${hostName}:${port} `)
})