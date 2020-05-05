var mongoose               = require("mongoose");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

});


// CONTACT SCHEMA SET UP

var contactSchema = new mongoose.Schema({
    
    email: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    message:{
         type: String, 
         required:true,
         lowercase: true,
         trim: true,
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

mongoose.Schema.Types.String.checkRequired(v => typeof v === 'string');


var Contact = mongoose.model("Contact", contactSchema )


module.exports = Contact