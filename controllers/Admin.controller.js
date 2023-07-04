const AdminModel = require("../models/Admin.Model");

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        let existing_admin = await AdminModel.findOne({ email })
        if (existing_admin) {
            res.status(200).json({ err: 300, msg: "Admin already exists" })
        } else {
            let newAdmin = new AdminModel({
                email, password
            })
            let admin = await newAdmin.save();
            res.status(200).json({ err: 200, msg: "admin created successfully", data: admin });
        }
    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let isAdmin = await AdminModel.findOne({ email, password });
        if (isAdmin) {
            res.status(200).json({ err: 200, msg: "Logged in successfully" });
        } else {
            res.status(200).json({ err: 300, msg: "email or password does not match" });
        }
    } catch (error) {
        res.status(500).json({ err: 500, msg: error.tostring() });
    }
}
