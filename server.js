const express = require("express");
const bodyParser = require("body-parser");
const { options } = require("request");
const port = 3000;


const app = express();
let items = [];
let item;

app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    today = today.toLocaleDateString("en-US", options);
    res.render("index", {
        kindOfDay : today,
        newTasks : items
    }
    );
});

app.post("/", (req, res) => {
    // do something maybe with an array
    item = req.body.todoItem;
    items.push(item);
    console.log("The task " + item + " has been succesfully added to the array of tasks");
    res.redirect("/");
});

app.listen(port, function(req, res) {
    console.log("Up and running on port 3000");
});