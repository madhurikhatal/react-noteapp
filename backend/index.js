const connectToMongo = require('./db')  //import db from backend
const express = require('express')
connectToMongo();

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('hello world')
});

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
// app.use('/api/auth', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});