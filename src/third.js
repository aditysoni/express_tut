//middleware -- the work between request and respomse is done by middleware
//express.static(root,[optiions]) gonna use to serve static built in file
const express = require("express") ;


const app = express() ;     



app.get("/", (req,res) => 
{     
   res.send({   
    
    name: aditya ,              
    id : 1,

   });  
});

app.get("/", (req,res) =>  //to get the data '/' -- says homepage
{     
   res.json({   //will convert everything into json including the non - objects
    
    name: aditya ,               

   });  
});

app.get ('/about' , (req,res) =>{
   res.write("<h1>hello there from about page </h1>")
   res.write("<h1>hello there from about page </h1>")
   res.send(); //we write this at the end otherwise the page will kepp loading , as write commands thinks there is more coming 

}) ;

app.listen(8000 , ()=>{
console.log("listening the port at 8000") ;
} ) ;




