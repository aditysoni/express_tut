//for dynamic site --using template engine
// install hbs 
// then mkdir views inside main directory --inside views there will be idex.hbs (like index.html) -- all the templates files are gonna stored in views directory 
//   then we have to set the view engine--app.set("view engine" , "hbs")
//   template engine route --app.get("",(req,res) => {res.render('filename')})
// for dynamic content we add  {{}}
//res.render("filename " , {{dynamic variable name (like props in react )--name : value }})


const express = require("express") ;
const app = express() ;
const path = require("path") ;
const port = 8000 ;

const staticPath = path.join(__dirname , "File address")
const templatePath = path.join(__dirname , "file address of the template directory")
app.set("view engine" , "hbs");   //setting the view engine 
app.set("views " , templatePath) ; //setting the noew template directory in the place of views directory 
app.use(express.static(staticPath)); //becasuse of this line the html file in public will run 

app.get("/" , (req,res) =>{
    res.render("File_name " , {{
        name : aditya , //dynamic variable 
    }}) ;
}) ;
app.get("*" ,(req, res)=> {                                ///* makes sure that anything which is not of the above routing file should show this
    res.render("filename" , {{name; "404 page ", }});

});
app.listen(port , () => {
    console.log("listening to the port ${port} ") ;
}) ;