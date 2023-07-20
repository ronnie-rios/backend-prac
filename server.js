const express = require('express');
const cors = require('cors');
const { userRoutes } = require('./routes/user.routes');
const { todoRoutes } = require('./routes/todos.routes');

const app = express();

const PORT = 9002;
require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

//routes, we prepend the endpoint here,
//all of the user routes will have /api/users/
app.use('/api/users', userRoutes);
//all of the todo routes will have /api/todos/
app.use('/api/todos', todoRoutes)

//middleware
app.use((req, res) => {
    res.status(404)
        .json({
            error: 'route not found'
        })
});



app.listen(PORT, () => console.log(`server is running on ${PORT}`))