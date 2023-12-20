// const functions = require('firebase-functions')

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRETE);

// app config
const app = express();

// middleware
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	try {
		console.log("payment Request recived for this amount", total);
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total),
			currency: "USD",
		});
		

		// ok-created
		res.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send("Server error")

	}
});

app.listen(10000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Listening 10000");
	}
});
