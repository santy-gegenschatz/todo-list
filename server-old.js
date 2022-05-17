const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    let date_variable = new Date();
    let today = date_variable.getDay();
    switch(today) {
        case (0):
            today = "Sunday";
            break;
        case (1):
            today = "Monday";
            break;
        case (2):
            today = "Tuesday";
            break;
        case (3):
            today = "Wednesday";
            break;
        case (4):
            today = "Thursday";
            break; 
        case (5):
            today = "Friday";
            break;
        case (6):
            today = "Saturday";
            break;
        default:
            console.log("Error. The date is: " + today);
    }
    res.render("index", {kindOfDay : today});
});

app.listen(3000, function(req, res) {
    console.log("Up and running on port 3000");
});