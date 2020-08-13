const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//----Defining path for Express config--------//

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//---------------------End------------------------//

//---Setup handlebars engine and views location-------//

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//---------------------End------------------------//

//---------Setup static directory to serve--------//

app.use(express.static(publicDirectoryPath));

//---------------------End------------------------//

app.get("", (req, res) => {
	res.render("index", {
		title: "Weather",
		name: "Robinson Garcia"
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Me",
		name: "Robinson Garcia"
	});
});

app.get("/help", (req, res) => {
	res.render("help", {
		title: "Help",
		name: "Robinson Garcia",
		message: "How may I help you."
	});
});

app.get("/weather", (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: "Please provide a search term"
		});
	}

	console.log(req.query);

	geocode(
		req.query.address,
		(error, { longitude, latitude, location } = {}) => {
			if (error) {
				return res.send({ error });
			}

			forecast(longitude, latitude, (error, forecastData) => {
				if (error) {
					return res.send({ error });
				}

				res.send({
					address: req.query.address,
					location: location,
					forecast: forecastData
				});
			});
		} 
	);
});

app.get("/help/*", (req, res) => {
	res.render("404", {
		title: "Help",
		name: "Robinson Garcia",
		errMessage: "Help Article not Found"
	});
});

app.get("*", (req, res) => {
	res.render("404", {
		title: "404",
		name: "Robinson Garcia",
		errMessage: "Page not Found "
	});
});

app.listen(3000, () => {
	console.log("Server is up on port 3000.");
});
