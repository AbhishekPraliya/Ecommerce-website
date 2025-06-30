// controllers/product.controller.js
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) return res.status(404).json({ success: false, message: "Product not found" });
        res.status(200).json({ success: true, product: updated });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ success: false, message: "Product not found" });
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("brand").populate("productRatings.user");
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });
        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getProductsByIdList = async (req, res) => {
    try {
        const { productIds } = req.body; // Expecting an array of IDs
        if (!Array.isArray(productIds) || productIds.length === 0) {
        return res.status(400).json({ success: false, message: "Invalid or empty productIds array" });
        }
        const products = await Product.find(
            { _id: { $in: productIds } }
        ).select("image label rating brand name price originalPrice discount like");

        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const products = await Product.find({ category: categoryId }).populate("brand");
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getProductsBySearch = async (req, res) => {
    try {
        const { searchQuery } = req.body;
        const regex = new RegExp(searchQuery, "i");
        const products = await Product.find({ name: { $regex: regex } }).populate("brand");
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getProductsByBrandId = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.find({ brand: id }).populate("brand");
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

