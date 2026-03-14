import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.js";

const app = express();
const PORT = 3000;

const MONGO_URI = "mongodb://127.0.0.1:27017/mongoose_express_demo";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ product });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product details" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const newProduct = new Product({ name, price, category, description });
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

app.get("/products/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category });
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});