import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3, // minimum length of 3 characters
    },
    price: {
        type: Number,
        required: true,
        min: 0, // price must be a positive number
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "clothing", "books", "home", "beauty"], 
    },
});

// Instance method to apply a discount
productSchema.methods.applyDiscount = function (discount) {
    this.price = this.price - (this.price * (discount / 100));
    return this.price;
};

// Static method to find products by category
productSchema.statics.findByCategory = function (category) {
    return this.find({ category });
};

// Virtual property to get a formatted price
productSchema.virtual("formattedPrice").get(function () {
    return `$${this.price.toFixed(2)}`;
});

// Middleware to log before saving a product
productSchema.pre("save", function (next) {
    console.log(`About to save product: ${this.name}`);
    next();
});

const Product = mongoose.model("Product", productSchema);

export default Product;