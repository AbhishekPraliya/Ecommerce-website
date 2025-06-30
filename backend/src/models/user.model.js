import mongoose from "mongoose";

const creditSchema = new mongoose.Schema({
    creditType: String,
    expireDate: String,
    receivedDate: String,
}, { _id: false });

const cashSchema = new mongoose.Schema({
    cashReceivedType: String,
    receivedDate: String,
}, { _id: false });

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: "/avatar.jpg",
        },
        loginProvider: {
            type: String,
            enum: ["google-oauth2", "facebook", "apple", "windowslive", "email", "unknown"],
            default: "unknown",
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
            year: Number, // Format: dd-mm-yyyy
        },
        address: {
            country: String,
            state: String,
            city: String,
            buildingNumber: String,
            houseNumber: String,
            street: String,
            zipCode: String,
        },
        wishlist: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
        cart: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
                selectedSize: String,
                selectedColor: String,
            },
        ],
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order",
            }
        ],
        payment: [
            {
                paymentDate: String,
                paymentAmount: Number,
            },
        ],
        wallet: {
            credit: {
                totalCredit: Number,
                description: String,
                transactions: [creditSchema],
            },
            cash: {
                totalCash: Number,
                description: String,
                transactions: [cashSchema],
            },
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
