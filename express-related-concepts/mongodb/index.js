import mongoose from "mongoose";
import Product from "./models/product";

// Connect to MongoDB
const MONGO_URI = "mongodb://127.0.0.1:27017/test-db"; 
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

async function runMongooseOperations() {
  try {
    // Create a new product
    const newProduct = new Product({
      name: "Sample Product",
      price: 100,
      description: "This is a sample product",
      category: "electronics",
    });
    await newProduct.save();
    console.log("Product created:", newProduct);

    // Fetch all products
    const products = await Product.find();
    console.log("All products:", products);

    // Find a product by ID
    const product = await Product.findById(newProduct._id);
    console.log("Product found by ID:", product);

    // Update a product
    const updatedProduct = await Product.findByIdAndUpdate(
      newProduct._id,
      { price: 120 },
      { new: true }
    );
    console.log("Updated product:", updatedProduct);

    // Delete a product
    const deletedProduct = await Product.findByIdAndDelete(newProduct._id);
    console.log("Deleted product:", deletedProduct);
  } catch (error) {
    console.error("Error during Mongoose operations:", error);
  }
}

runMongooseOperations();