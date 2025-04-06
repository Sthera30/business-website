import { db } from '../index.js'


//create employee


export const createEmployee = async (req, res) => {

    const { employeeName, employeeEmail } = req.body

    try {

        if (!employeeName) {
            return res.status(200).json({ error: 'Name is required!', success: false })
        }

        if (!employeeEmail) {
            return res.status(200).json({ error: 'Email is required!', success: false })
        }


        const insertEmployee = () => {

            return new Promise((resolve, reject) => {

                const insertEmployeeSql = "INSERT INTO employee (employeeName, employeeEmail) VALUES (?, ?)"
                db.query(insertEmployeeSql, [employeeName, employeeEmail], (err, result) => {

                    if (err) {
                        reject(err)
                    }

                    else {
                        resolve(result)
                    }

                })

            })

        }

        await insertEmployee()

        return res.status(200).json({ message: "Successfully added!", success: true })


    } catch (error) {
        console.log(error);
    }
}


//GetAllEmployees
export const getAllEmployees = async (req, res) => {

    try {

        const getAllEmployeesData = () => {

            return new Promise((resolve, reject) => {

                const getAllEmployeesDataSql = "SELECT * FROM employee"
                db.query(getAllEmployeesDataSql, (err, result) => {
                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve(result)
                    }
                })

            })
        }

        const results = await getAllEmployeesData()

        const employee = results

        return res.status(200).json({
            message: '', success: true, data: {
                employee: employee
            }
        })


    } catch (error) {
        console.log(error);

    }

}


//GetEmployeeById

export const getEmployeeById = async (req, res) => {

    const { id } = req.query

    try {

        const getEmployeeByIdData = () => {

            return new Promise((resolve, reject) => {

                const getEmployeeByIdDataSql = "SELECT * FROM employee WHERE id = ?"
                db.query(getEmployeeByIdDataSql, [id], (err, result) => {
                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve(result)
                    }
                })

            })

        }

        const results = await getEmployeeByIdData()

        if (results.length === 0) {
            return res.status(200).json({ error: 'No Inforamtion Found!', success: false })
        }

        const employee = results[0]

        return res.status(200).json({
            message: '', success: true, data: {
                employee: employee
            }
        })

    } catch (error) {
        console.log(error);
    }

}

//RemoveEmployee

export const removeEmployee = async (req, res) => {

    const { id } = req.query

    try {

        const removeEmployeeData = () => {
            return new Promise((resolve, reject) => {

                const removeEmployeeDataSql = "DELETE FROM employee WHERE id = ?"
                db.query(removeEmployeeDataSql, [id], (err, result) => {
                    if (err) {
                        reject(err)
                    }

                    else {
                        resolve(result)
                    }
                })

            })
        }

        const results = await removeEmployeeData()

        if (results.affectedRows === 0) {
            return res.status(200).json({ error: 'No changes were made!', success: false })
        }

        return res.status(200).json({ message: 'Deleted successfully!', success: true })

    } catch (error) {
        console.log(error);

    }

}

//updateEmployee

export const updateEmployee = async (req, res) => {

    const { id, employeeName, employeeEmail } = req.body

    try {

        if (!employeeName) {
            return res.status(200).json({ error: 'name is required!', success: false })
        }

        if (!employeeEmail) {
            return res.status(200).json({ error: 'email is required!', success: false })
        }


        const getEmployeeByidInfo = () => {

            return new Promise((resolve, reject) => {

                const getEmployeeByidInfoSql = "SELECT * FROM employee WHERE id = ?"
                db.query(getEmployeeByidInfoSql, [id], (err, result) => {

                    if (err) {
                        reject(err)
                    }

                    else {
                        resolve(result)
                    }

                })

            })

        }

        const results = await getEmployeeByidInfo()

        if (results.length === 0) {
            return res.status(200).json({ error: 'No Info!', success: false })
        }

        // returns an array 
        
        const employee = results


        const updateEmployeeData = () => {

            return new Promise((resolve, reject) => {

                const updateEmployeeDataSql = "UPDATE employee SET employeeName = ?, employeeEmail = ? WHERE id = ? "
                db.query(updateEmployeeDataSql, [employeeName || employee[0].employeeName, employeeEmail || employee[0].employeeEmail, id], (err, result) => {

                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve(result)
                    }

                })



            })
        }

        const employeeResults = await updateEmployeeData()

        if (employeeResults.affectedRows === 0) {
            return res.status(200).json({ error: 'No updates were made!', success: false })
        }

        return res.status(200).json({
            message: 'Updated successfully!', success: true, data: {
                employee: {
                    id,
                    employeeName: employeeName || employee[0].employeeName,
                    employeeEmail: employeeEmail || employee[0].employeeEmail
                }
            }
        })




    } catch (error) {
        console.log(error);

    }

}