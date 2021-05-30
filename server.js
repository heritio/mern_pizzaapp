const express = require("express");
const app = express();
const Pizza = require("./models/pizzaModel");

const db = require("./db");
const pizzasRoute = require("./routes/pizzasRoute");

const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");
app.use("/api/pizzas", pizzasRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", ordersRoute);
app.get("/", (req, res) => {
  res.send("Server working " + port);
});

const port = process.env.PORT || 9000;

app.listen(port, () => "Server running on port port");
