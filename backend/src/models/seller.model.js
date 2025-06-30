import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    country: String,
    state: String,
    city: String,
    street: String,
    buildingNumber: String,
    houseNumber: String,
    zipCode: String,
}, { _id: false });

const paymentGatewaySchema = new mongoose.Schema({
    razorpayMerchantId: String,
    razorpayKeyId: String,
    razorpayKeySecret: String,
    accountVerified: {
        type: Boolean,
        default: false,
    },
}, { _id: false });

const sellerSchema = new mongoose.Schema({
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
    phoneNumber: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    dateOfBirth: {
        day: Number,
        month: Number,
        year: Number, // Format: dd-mm-yyyy
    },
    address: addressSchema,

    orders: [
        {
            order: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order",
            },
            paymentReceived: {
                type: Boolean,
                default: false,
            },
        },
    ],

    paymentGatewayDetails: paymentGatewaySchema,

    brands: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand",
        },
    ],
}, { timestamps: true });

const Seller = mongoose.model("Seller", sellerSchema);
export default Seller;
