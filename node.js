const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const users = [];

const fs = require("fs");
const date = fs.readFileSync("./usef.json");

const usef = JSON.parse(date);

app.use(express.json());
const server = app.listen(3000, () => {
    console.log("lis");
});
app.use(express.static("website"));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/users", (req, resp) => {
    resp.json(usef);
});

app.post("/users", (req, resp) => {
    const user = { username: req.body.username, password: req.body.password };
    users.push(user);
    resp.status(201).send();
});

app.post("/som", (req, resp) => {
    const value1 = req.body.text1;
    const value2 = req.body.text2;
    const name = usef.username;
    const password = usef.password;
    if (value1 !== name && value2 !== password) {
        resp.send("This username or password is not exist");
    } else {
        resp.send("Great");
    }
});

app.post("/sign", (req, resp) => {
    const value1 = req.body.text3;
    const value2 = req.body.text4;
    const obj = { username: value1, password: value2 };
    const date = JSON.stringify(obj, null, 2);
    console.log(date);

    fs.writeFile("./usef.json", date, (err) => {
        const replay = {
            msg: "something",
        };

        resp.send(replay);
        if (err) {
            console.log("file read failed", err);
        }
    });
});