const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    empId: { type: String, unique: true },
    name: { type: String },
    dob: { type: String },
    designation: { type: String },
    department: { type: String },
    joiningDate: { type: String },
    gender: { type: String },
    experience: { type: String },
    country: { type: String },
})


module.exports = mongoose.model('employee', employeeSchema);
