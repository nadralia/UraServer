const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log("DB Connected"))

mongoose.connection.on("error", err =>{
    console.log(`DB connection error : ${ err.message}`)
});
