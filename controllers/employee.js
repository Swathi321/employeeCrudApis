const Employee = require('../models/employee');


//Functionality to get all employee details
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json({ status: 'Success', message: 'Data fetched successfully', data: employees })

    } catch (error) {
        res.status(500).json({ status: 'Fail', message: 'Data fetch failed', error })

    }

};

//Functionality to get employee details based on employeeid
exports.getOneEmployee = async (req, res) => {
    try {
        const { empId } = req.params;
        const existedEmployee = await Employee.findOne({ empId: empId })
        if (!existedEmployee) {
            return res.status(404).json({ status: 'Fail', message: 'Data not found', error: { message: "Data not found" } })
        }

        res.status(200).json({ status: 'Success', message: 'Data fetched successfully', data: existedEmployee })

    } catch (error) {
        res.status(500).json({ status: 'Fail', message: 'Data fetch failed', error })

    }
}

//Functionality to add new employee details
exports.addEmployee = async (req, res) => {
    try {
        const { empId } = req.body;
        const existedEmployee = await Employee.findOne({ empId: empId })
        if (existedEmployee) {
            return res.status(400).json({ status: 'Fail', message: 'Data insertion failed', error: { message: "Employeeid already exists" } })
        }
        const result = await Employee.create(req.body)
        res.status(201).json({ status: 'Success', message: 'Data inserted successfully', data: result })
    } catch (error) {
        res.status(500).json({ status: 'Fail', message: 'Data insertion failed', error })

    }
}

//Functionality to update existing employee details
exports.updateEmployee = async (req, res) => {
    try {
        const { empId } = req.body;
        const existedEmployee = await Employee.findOne({ empId: empId })
        if (!existedEmployee) {
            return res.status(404).json({ status: 'Fail', message: 'Data not found', error: { message: "Data not found" } })
        }
        const updateObj = {
            name: req.body.name ? req.body.name : existedEmployee.name,
            dob: req.body.dob ? req.body.dob : existedEmployee.dob,
            designation: req.body.designation ? req.body.designation : existedEmployee.designation,
            department: req.body.department ? req.body.department : existedEmployee.department,
            joiningDate: req.body.joiningDate ? req.body.joiningDate : existedEmployee.joiningDate,
            gender: req.body.gender ? req.body.gender : existedEmployee.gender,
            experience: req.body.experience ? req.body.experience : existedEmployee.experience,
            country: req.body.country ? req.body.country : existedEmployee.country,
        }

        const updatedEmployee = await Employee.updateOne({ empId }, updateObj)
        res.status(200).json({ status: 'Success', message: 'Data updated successfully', data: updatedEmployee })

    } catch (error) {
        res.status(500).json({ status: 'Fail', message: 'Data updation failed', error })

    }
}

//Functionality to delete existing employee details
exports.deleteEmployee = async (req, res) => {
    try {
        const { empId } = req.body;
        const existedEmployee = await Employee.findOne({ empId: empId })
        if (!existedEmployee) {
            return res.status(404).json({ status: 'Fail', message: 'Data not found', error: { message: "Data not found" } })
        }
        await Employee.deleteOne({ empId })
        res.status(200).json({ status: 'Success', message: 'Data deleted successfully' })

    } catch (error) {
        res.status(500).json({ status: 'Fail', message: 'Data deletion failed', error })

    }
}