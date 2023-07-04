const EmployeeModel = require("../models/Employees.Model");

exports.create = async (req, res) => {
    try {
        const { name, age, position, email, phoneNumber } = req.body;
        const newEmployee = new EmployeeModel({
            name,
            age,
            position,
            email,
            phoneNumber,
        });
        let data = await newEmployee.save();
        res.status(200).json({ err: 200, msg: "Employee created successfully", data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id, name, age, position, email, phoneNumber } = req.body;

        let data = await EmployeeModel.findByIdAndUpdate(id, {
            name,
            age,
            position,
            email,
            phoneNumber,
        }, { new: true });
        res.status(200).json({ err: 200, msg: "Employee updated successfully", data: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        let data = await EmployeeModel.findOneAndDelete({ _id: id });
        if (data) {
            res.status(200).json({ success: true, msg: "Employee deleted successfully" });
        } else {
            res.status(404).json({ success: false, msg: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


exports.getAllEmployees = async (req, res) => {
    try {
        let data = await EmployeeModel.find({});
        res.status(200).json({ err: 200, msg: "Data found", data: data })
    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() })
    }
}

exports.findById = async (req, res) => {
    try {
        const { id } = req.params;
        let data = await EmployeeModel.findById(id);
        if (data) {
            res.status(200).json({ err: 200, msg: "data found", data: data });
        } else {
            res.status(404).json({ success: false, msg: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
