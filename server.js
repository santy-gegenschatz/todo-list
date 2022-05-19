// Config Variables
const express = require("express");
const bodyParser = require("body-parser");
const { options } = require("request");
const date = require(__dirname + "/date.js");
console.log(date);
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Global Variables
let items = ["Write Code", "Write more Code", "Learn C++"];
let workItems = [];
let item;

// Get & Post Routes
app.get("/", function (req, res) {
    let today = date();
    res.render("index", {
        pageTitle : today,
        newTasks : items
    }
    );
});

app.get("/work", (req, res) => {
    res.render("index", {
        pageTitle : "Work",
        newTasks : workItems
    }
    );
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.post("/", (req, res) => {
    item = req.body.todoItem;
    if (req.body.list == "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
    console.log("The task " + item + " has been succesfully added to the array of tasks");
    
});

app.listen(port, function(req, res) {
    console.log("Up and running on port 3000");
});