var http = require("http");

//TODO - Use Employee Module here

var EmployeeModule = require('./Employee.js');

console.log("test" + EmployeeModule)

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port    
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {

            //res means REPONSE
            //req means REQUEST
            res.writeHead(200, { 'Content-Type': 'text/html' }); //writting the header
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            
            res.writeHead(200, { 'Content-Type': 'text/html' }); //writting the header
            res.end(EmployeeModule.getEmployees);
            console.log(EmployeeModule.getEmployees)

            //TODO - Display all details for employees in JSON format


        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(EmployeeModule.getEmployeeName()); 

        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end("salary: " + EmployeeModule.getSalary())

    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})  