const express = require("express");
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
//const swaggerUi = require("swagger-ui-express")
//const apiDoc = require("./docs/api-docs").apiDocumentation
const db = require("./models");

//Routes import
const userRoutes = require("./routes/user.routes")
dotenv.config({ path: './config/config.env' })
const app = express();


//Middlewares
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDoc));
app.use(bodyParser.json())

//Routes
app.use('/api/user', userRoutes);


//DB conn
async function connectToDb(){
    try{
        await db.mongoose.connect(process.env.DATABASE_URL, {  useNewUrlParser: true,   useUnifiedTopology: true })
        console.log("Connected to the database!");
    }
    catch(error){
        console.log("Cannot connect to the database!", error);
    }
}
connectToDb()


app.listen(process.env.PORT , ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})