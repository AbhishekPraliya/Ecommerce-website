import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        categoryImage: {
            type: String,
            required: true,
        },
        categoryName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        gender: {
            type: [String],
            enum: ["men", "women", "unisex", "kids"],
            required: true,
        },
        description: {
            type: String,
            default: "",
            trim: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt
    }
);

export const Category = mongoose.model("Category", categorySchema);
