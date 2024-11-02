// app.js
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require("./routes/user.route.js");
const flightRouter = require("./routes/flight.route.js");
const bodyParser = require('body-parser');

app.use(express.json());

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : "16kb"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/flights", flightRouter);


// Start the server
const port = process.env.PORT || 3002;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
});
