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

app.use((req, res) => {
    res.status(404)
        .json({
            error: 'route not found'
        })
});

app.use((err, req, res, next) => {
    let errorStatus = err.status || 500;
    let errorMessage = err.message || 'problem with your request';
    res.json({
        status: errorStatus,
        message: errorMessage
    });
});


app.listen(PORT, () => console.log(`server is running on ${PORT}`))