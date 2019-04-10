// Request Header Parser Microservice
// Setup
const express = require("express");
const cors = require("cors");
const bodyParser =require("body-parser");
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// Get information
app.get("/", function(req, res, next) {
	// Variables
	let address = (req.headers["x-forwarded-for"] || req.connection.remoteAddress || "").split(",")[0].trim();
	let language = req.headers["accept-language"];
	let browser = req.headers["user-agent"];
	// Send back json file   
	res.json({ipaddress: address, language: language, software: browser});
});

// Listen port 3000 or port in environment variable PORT
const listener = app.listen(process.env.PORT || 3000, function() {
	console.log("Listening port: " + listener.address().port);
});
