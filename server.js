const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 9002;
require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));


app.listen(PORT, () => console.log(`server is running on ${PORT}`))