import express from "express";
import Product from "./models/product";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

const MONGO_URI = "mongodb://127.0.0.1:27017/udemy-express"; 
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

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.json({
      products,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Route to add a new product
app.post("/products", async (req, res) => {
  try {
    const { name, price, category } = req.body; 
    const newProduct = new Product({ name, price, category }); // Create a new product instance
    await newProduct.save(); // Save the product to the database
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

// Route to fetch a product by ID
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract product ID from the request parameters
    const product = await Product.findById(id); // Find the product by ID
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ product });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// Route to update a product by ID
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params; 
    const updates = req.body; // Extract updates from the request body
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

// Route to delete a product by ID
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});