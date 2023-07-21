let express = require("express");
let server = express();
let mysql = require("mysql");

let db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nbs2"
});

db.connect();

server.get("/", function(req,res){
    res.render("homepage.ejs");
    res.end()
})

server.get("/allemployees", function(req,res){
    db.query("select * from employees", function(err, data){
    res.render("employeelist.ejs", {employees:data});
    res.end()
   })
})

server.get("/departmentEmployees/:dept", function(req,res){
    let sql = "select * from employees where department='"+req.params.dept+"'"
    db.query(sql, function(err, data){
    res.render("employeelist.ejs", {employees:data});
    res.end()
   })
})

server.get("/departments", function(req,res){
    db.query("select distinct department from employees", function(err, data){
    res.render("departments.ejs", {deptName:data});
    res.end()
    })
})

server.get("/deleteEmployee/:empno", function(req,res){
    let deleteSQL="delete from employees where empno="+req.params.empno
    db.query(deleteSQL,function(err, data){

        db.query("select * from employees",function(err, data){
            res.render("employeelist.ejs",{employees:data})
            res.end()
        })
    })
})


server.listen(3000, ()=>{
    console.log('Server is running on PORT 3000');
    console.log('ctrl+C to close');
})