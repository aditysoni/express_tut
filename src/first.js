//for serving static sites 

// why we use express js
//-- the work we do in nodejs is made a way easier and less effort is madw on expressjs

const express = require("express") ;
const path = require("path") ;


const app = express() ;       ///inside this app we have number of methods which we can use create site and other thigns

const staticPath = path.join(__dirname , "../public") ;

//built in middleware
app.use(express.static(staticPath))

app.get("/", (req,res) =>  //to get the data '/' -- says homepage
{     
   res.send("hello from the express") ;
});
app.get ('/about' , (req,res) =>{
   res.send("hello there from the about page");
}) ;

app.listen(8000 , ()=>{
console.log("listening the port at 8000") ;
} ) ;

////API used for basically ----
//  {get - read
// post - create
// put - update
// delete }


