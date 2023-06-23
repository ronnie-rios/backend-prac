const express = require('express');
const cors = require('cors');
const { userRoutes } = require('./routes/user.routes');
const { noteRoutes } = require('./routes/todos.routes');

const app = express();

const PORT = 9002;
require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/notes',noteRoutes)

app.listen(PORT, () => console.log(`server is running on ${PORT}`))