const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectionDB } = require("./db/connection");
const adminRoutes = require("./routes/admin.routes");
const employeeRoutes = require("./routes/employee.routes")
app.use(cors());

app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/admin", adminRoutes);
app.use("/employee", employeeRoutes);

connectionDB();
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});