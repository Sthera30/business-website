import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import mysql from 'mysql2'
import { createEmployee, getAllEmployees, getEmployeeById, removeEmployee, updateEmployee } from './controller/user.controller.js'

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


//create employee api
app.post("/createEmployee", createEmployee)

//Get All Employees
app.get("/getAllEmployees", getAllEmployees)

//Get Employee By Id
app.get("/getEmployeeById", getEmployeeById)

//Remove Employee Id
app.delete("/removeEmployee", removeEmployee)

//updateEmployee
app.put("/updateEmployee", updateEmployee)


//create connection

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: '',
    database: "employeeDB"

})


//connect to the databse

db.connect((err) => {

    if (err) {
        console.log("Failed to connect to the database!", err);
    }
    else {
        console.log("Connected to the database!");
    }
})

export { db }


const PORT = 5000;

app.listen((PORT), () => {
    console.log(`App is listening at port ${PORT}!`);
})
