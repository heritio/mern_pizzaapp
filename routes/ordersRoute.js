const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);

const stripe = require("stripe")(
  "sk_test_51IwovOGAZeNDJEOrjwkm0oauqFg4Uvi1vEw3IGgWIktYrC2HBOsb4EvJ3X9NgkWI9PJ6uwSNP30wIVDHt9QedU9h001XrgagsB"
);
router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

  try {
    const costumer = await stripe.costumers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "NOK",
        customer: costumer.id,
        receit_email: token.email,
      },
      {
        idempotencykey: uuidv4(),
      }
    );

    if (payment) {
      res.send("Payment Done");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
