const mongoose = require('mongoose'); 
const db = 'mongodb+srv://Naim:Sg2rmaju59@project-api.7zsizhx.mongodb.net/Kitsu?retryWrites=true&w=majority'
  
mongoose.connect(db).then(()=> {
    console.log("Connected to database");})
    .catch(()=>{ 
    console.log("Error Connecting to database");}) 
    //A schema matched the table in your database 

const heroSchema = new mongoose.Schema ({ 
    Title:{type:String},
    Year:{type:String}, 
    PopularityRank:{type:String}, 
    YtbLink:{type:String},
});
 
const Film = mongoose.model('animeinfo',heroSchema);
module.exports = Film; 