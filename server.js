const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const data = require("./data.js");

const app = express();
dotenv.config(); 
mongoose.connect(process.env.MONGODB_URI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const Product = mongoose.model("products", new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    description: String,
    calorie: Number,
}));
app.get('/api/products/seed', async (req, res) => {
    const products = await Product.insertMany(data.products);
    res.send({ products });
});

app.get("/api/categories", (req, res) => {
  res.send(data.categories);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
