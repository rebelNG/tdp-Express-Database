let Express = require("express")
let server = Express()
let MySql = require("mysql")
let bodyParser = require('body-parser');

server.set("view engine", "ejs")
server.use(bodyParser.urlencoded({ extended: false }));

let db = MySql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database: "nbs2"
})
db.connect()

server.get("/", (req,res)=>{
    res.render("index.ejs")
    res.end()
})

server.get("/allemployeelist", (req, res)=>{
    db.query("Select * from employee",(err, data)=>{
        res.render("employeelist.ejs",{employee:data})
        res.end()
    })
})

server.get("/departments", (req,res)=>{
    
    db.query("Select distinct department from employee",(err, data)=>{
        res.render("departments.ejs",{deptName:data})
        res.end()
    })
})

server.get("/employeeDepartment/:dept", (req,res)=>{
    
    let sql1 = "Select * from employee where department='"+req.params.dept+"'"
    db.query(sql1,(err, data)=>{
        res.render("employeelist.ejs",{employee:data})
        res.end()
    })
})

server.get("/deleteemployee/:empId", (req, res)=>{
    let deleteSQL = "delete from employee where empId="+req.params.empId
    db.query(deleteSQL, (err, data)=>{
        db.query("Select * from employee",(err, data)=>{
            res.render("employeelist.ejs",{employee:data})
            res.end()
        })
    })
})

server.get("/addemployee",(req,res)=>{
    res.render("addemployee.ejs")
    res.end()
})

server.post("/saveemployee", (req, res)=>{
    let empId = req.body.empId
    let name = req.body.name
    let dept = req.body.department
    let insertSQL = `insert into employee values(${empId}, '${name}', '${dept}')`
    db.query(insertSQL, (err,data)=>{
        db.query("Select * from employee",(err, data)=>{
            res.render("employeelist.ejs",{employee:data})
            res.end()
        })
    })
})

server.listen(3000, ()=>{
    console.log('Server is running...');
})