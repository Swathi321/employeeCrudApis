const express = require('express');
const emplyeeController = require('../controllers/employee');

const router = express.Router();


router
    .route('/add')
    .post(emplyeeController.addEmployee)

router
    .route('/getAllEmployees')
    .get(emplyeeController.getAllEmployees)

router
    .route('/getOneEmployee/:empId')
    .get(emplyeeController.getOneEmployee)

router
    .route('/update')
    .put(emplyeeController.updateEmployee)

router
    .route('/delete')
    .delete(emplyeeController.deleteEmployee)

module.exports = router;
