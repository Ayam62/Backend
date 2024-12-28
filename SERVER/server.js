const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 4008;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  const extName = path.extname(filePath).toLowerCase();

  fs.readFile(filePath,(err,content)=>{
    if(err){
      if(err.code==="ENOENT"){
      res.writeHead(400,{"Content-Type":"text/plain"})
      res.end("404 file not found broo")
      }
    }
    else{
      res.writeHead(200,{"COntent-Type":"text/html"});
      res.end(content)
    }
  })

});

server.listen(port, () => {
  console.log("server is listening on port", port);
});
