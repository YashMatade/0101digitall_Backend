const EmployeeController = require("../controllers/Employees.controller");
const router = require("express").Router();

router.post("/create", EmployeeController.create);
router.post("/update", EmployeeController.update);
router.post("/delete/:id", EmployeeController.delete);
router.get("/list", EmployeeController.getAllEmployees);
router.get("/get/:id", EmployeeController.findById);

module.exports = router;