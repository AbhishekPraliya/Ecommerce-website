import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    loginProvider: {
        type: String,
        enum: ["google-oauth2", "facebook", "apple", "windowslive", "email", "unknown"],
        default: "unknown",
    },
    role: {
        type: String,
        default: "owner",
    },
    phoneNumber: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    dateOfBirth: {
        day: Number,
        month: Number,
        year: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const Owner = mongoose.model("Owner", ownerSchema);
export default Owner;
