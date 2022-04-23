const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/noteapp1"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () =>{
        console.log("connected sucessfully");
    })
}

module.exports = connectToMongo;