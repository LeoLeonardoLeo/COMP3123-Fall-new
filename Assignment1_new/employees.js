const express = require('express');
const router = express.Router();

const Employee = require('./modules/employeesSchema');

function idMaker(){
    const rndUserID = Math.random().toString(16).substring(2, 14);
    return rndUserID;
}

//employee management
//3 - employees - get all employee list
router.get("/api/v1/emp/employees", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            message: "Employee list retrieved successfully",
            employees: employees
        });
    }catch(error) {
        res.status(500).json({
            message: "Error getting employee list",
            error: error.message
        });
    }
});


//4 - can create new employee
router.post("/api/v1/emp/employees", async (req, res) => {
    const first_name = req.body.first_name; 
    const last_name = req.body.last_name;
    const email = req.body.email;
    const position = req.body.position;
    const salary = req.body.salary;
    const date_of_joining = req.body.date_of_joining;
    const department = req.body.department;  

    const employeeExists = await Employee.findOne({ email });
    if(employeeExists){
        return res.status(400).json({
            message: "An employee with this email already exists"
        });
    }
    const employeeID = idMaker();
    const newEmployee = new Employee({
        employeeID,
        first_name,
        last_name,
        email,
        position,
        salary,
        date_of_joining,
        department
    });
    
    await newEmployee.save(); //saving to database
    
    res.status(201).json({ //post status
        message: "Employee created: Employee ID: " + employeeID,
        employeeID: employeeID
    }); 

});

//5 - can get details by employee id
router.get("/api/v1/emp/employees/:eid", async (req, res) => {
    const employeeID = req.params.eid;

    const employeeExists = await Employee.findById(employeeID);

    if (employeeExists) {
        return res.status(200).json({
            message: "Employee details",
            employee: employeeExists
        });
    } else {
        return res.status(404).json({
            message: `Employee with ID ${employeeID} not found`
        });
    }
});

//6 - can update employee details
router.put("/api/v1/emp/employees/:eid", (req, res) => { 
    const employeeID = req.params.eid; //requires employee id

    const position = req.body.position;
    const salary = req.body.salary;

    const employee = employees.find(employee => employee.employeeID === employeeID);

    if(employee){
        //idk how to update
        
        return res.status(200).json({
            message: "Employee updated",
            employee: employee
        });
    }else {
        return res.status(404).json({
            message: `Employee with ID ${employeeID} not found`
        });
    }
});

//7 - can delete employee by employee id
router.delete("/api/v1/emp/employees/:eid", async (req, res) => {
    const employeeID = req.params.eid;

    const deletedEmployee = await Employee.findOneAndDelete(employeeID);
    
    if(deletedEmployee){
        return res.status(204).json({
            message: "Employee Deleted"
        })
    }else{
        return res.status(404).json({
            message: `Employee with ID ${employeeID} not found`
        });
    }
});

module.exports = router;