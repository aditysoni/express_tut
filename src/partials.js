 // there are things which are used many times  , they can be putted into a file and be called there ..these are called partials
 // inside template directory make a partials folder 

const express = require("express") ;
const app = express() ;
const path = require("path") ;
const port = 8000 ;

const staticPath = path.join(__dirname , "File address")
const templatePath = path.join(__dirname , "file address of the template directory")
const partialsPath = path.join(__dirname , "file address of the partials--../templates/partials") //this ;line os representing the complete partial folder 

app.set("view engine" , "hbs");   //setting the view engine 
app.set("views " , templatePath) ; //setting the noew template directory in the place of views directory 
app.use(express.static(staticPath)); //becasuse of this line the html file in public will run 

app.get("/" , (req,res) =>{
    res.render("File_name " , {{
        name : aditya , //dynamic variable 
    }}) ;
}) ;

app.listen(port , () => {
    console.log("listening to the port ${port} ") ;
}) ;