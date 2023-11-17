﻿const express = require("express");
const https = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const auth = require("./authMiddleware");
const router = jsonServer.router("serverdata.json");


const enableHttps = false; //you can revert this if you didn't generate the certificates

const ssloptions = {}

if (enableHttps) {
  ssloptions.cert = fs.readFileSync("./ssl/sportsstore.crt");
  ssloptions.key = fs.readFileSync("./ssl/sportsstore.pem");
}

const app = express();

app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/SportsStore"));

app.listen(80,
  () => console.log("Http Server running on port 80"));

if (enableHttps) {
  https.createServer(ssloptions, app).listen(443,
    () => console.log("Https Server running on port 443"));
} else {
  console.log("Https disabled");
}
