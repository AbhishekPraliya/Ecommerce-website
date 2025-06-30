import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
    brandId: {
        type: String,
        required: true,
        unique: true,
    },
    brandName: {
        type: String,
        required: true,
        unique: true,
    },
    brandLogo: {
        type: String, // URL to logo image
    },
    brandBanner: {
        type: String, // Optional promotional banner
    },
    description: {
        type: String,
    },
    categories: [{
        type: String,
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller", // Seller who owns the brand
        required: true,
    },
    socialLinks: {
        website: String,
        instagram: String,
        facebook: String,
        twitter: String,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Pending"],
        default: "Pending",
    },
}, { timestamps: true });

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;
