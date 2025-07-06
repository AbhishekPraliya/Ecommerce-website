import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
    businessId: {
        type: String,
        required: true,
        unique: true,
    },
    businessName: {
        type: String,
        required: true,
        unique: true,
    },
    businessLogo: {
        type: String, // URL to logo image
    },
    businessBanner: {
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

const Business = mongoose.model("Business", businessSchema);
export default Business;
