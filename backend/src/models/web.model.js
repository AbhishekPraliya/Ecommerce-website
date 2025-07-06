import express from "express";
import mongoose from "mongoose";

// ─── Schema ────────────────────────────────────────────────
const websiteSchema = new mongoose.Schema({
    // NAVBAR DATA
    logoImage: String,
    logoText: String,
    applicationName:String,
    topNavItems: [
        {
        name: { type: String, required: true },
        route: { type: String,}
        }
    ],
    bottomNavItems: [
        {
        name: { type: String, required: true },
        route: { type: String, required: true }
        }
    ],

    // HOME PAGE DATA
    headerImage: String,
    headerText: String,
    imageSlider: [[String]], // 2D array of images per slide
    productSlider: [String], // array of categories
    trendingCategories: [String], // category image URLs
    advertisementPanel: [
        {
            image: String,
            offerEndDate: Date,
        },
    ],
}, { timestamps: true });

const WebsiteData = mongoose.model("WebsiteData", websiteSchema);

export default WebsiteData;