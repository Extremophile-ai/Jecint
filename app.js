var express                = require("express"),
    bodyParser             = require("body-parser"),
    mongoose               = require("mongoose"),
    Router                 = require("router"),
    router                 = express.Router(),
    Contact                = require("./Models/Contact"),
    contactRoute           = require("./Routes/Contacts");


// configuring mongoose connection
var options = {
    useNewUrlParser: true, 
    socketTimeoutMS:30000, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    serverSelectionTimeoutMS: 5000,
    useFindAndModify: false,
    family: 4
};
// mongoose.connect("mongodb://localhost/Jey", options);
mongoose.connect("mongodb+srv://GP:Power1050@cluster0-rk6gf.mongodb.net/test?retryWrites=true&w=majority", options)


// handle error after connection is established
// mongoose.connection.on('error', err => {
//     logError(err);
//   });


var app =express();
app.set("view engine", "ejs");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use("/api/contact", contactRoute)


app.get("/", function(req, res){
    res.render("Home");
});

app.get("/about", function(req, res){
    res.render("About");
});

app.get("/services", function(req, res){
    res.render("Services");
});

app.get("/catalogue", function(req, res){
    res.render("Gallery");
});

// Render Contact form
app.get("/contact", function(req, res){
    res.render("Contact");
});

// show up after message is sent
app.get("/end", function(req, res){
    res.render("End");
});






















app.listen(4020, function(){
    console.log("JECiNT is Ready")
});