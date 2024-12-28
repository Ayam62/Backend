import {server} from "bun"

server({
    fetch(request){
        const url=new URL(request.url);//give url on its own
        if(url.pathname==="/"){//if "/" is given to url it prints hello ayam
            return new Response("Hello Ayam"),{status:200}
        }
       else  if(url.pathname==="/ice-tea"){//if "/" is given to url it prints hello ayam
            return new Response("ice tea is a good opption"),{status:200}
        }
        else{
            return new Response("404 not found",{status :400})
        }
    },
    port :3000,
    hostname:"127.0.0.1"
})