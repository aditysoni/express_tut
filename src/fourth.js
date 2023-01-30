// why we use express js
//-- the work we do in nodejs is made a way easier and less effort is madw on expressjs

const express = require("express") ;


const app = express() ;       ///inside this app we have number of methods which we can use create site and other thigns



app.get("/", (req,res) =>  //to get the data '/' -- says homepage
{     
   res.send({   
    
    name: aditya ,               //converting the elements into json 
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



