const mongoose=require('mongoose');
// const dotenv=require('dotenv');
// dotenv.config();
async function connect(){
    mongoose.connect('mongodb://127.0.0.1:27017/')
    .then(()=>{
        console.log('connected to database');
    })
    .catch(err=>{
        console.log(err)||"couldn't connect to database"
    })
}
module.exports = connect