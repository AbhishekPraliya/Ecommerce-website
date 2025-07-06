

// controllers/seller.controller.js
import Seller from "../models/seller.model.js";
// import Order from "../models/order.model.js";
import Brand from "../models/brand.model.js";

export const createSeller = async (req, res) => {
    const { email, name, picture, loginProvider, phoneNumber, gender, dateOfBirth, address } = req.body;
    try {
        const existingSeller = await Seller.findOne({ email });
        if (existingSeller) return res.status(200).json({ success: true, seller: existingSeller });

        const newSeller = await Seller.create({
            email,
            name,
            picture,
            loginProvider,
            phoneNumber,
            gender,
            dateOfBirth,
            address,
        });
        res.status(201).json({ success: true, seller: newSeller });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const deleteSeller = async (req, res) => {
    try {
        await Seller.findByIdAndDelete(req.params.sellerId);
        res.status(200).json({ success: true, message: "Seller deleted successfully." });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getSeller = async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.sellerId);
        res.status(200).json({ success: true, seller });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getAllSellers = async (req, res) => {
    try {
        const sellers = await Seller.find();
        res.status(200).json({ success: true, sellers });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const updateSellerDetails = async (req, res) => {
    try {
        const updated = await Seller.findByIdAndUpdate(
            req.params.sellerId,
            req.body,
            { new: true }
        );
        res.status(200).json({ success: true, seller: updated });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const updateMobileNumber = async (req, res) => {
    try {
        const seller = await Seller.findByIdAndUpdate(
            req.params.sellerId,
            { phoneNumber: req.body.phoneNumber },
            { new: true }
        );
        res.status(200).json({ success: true, phoneNumber: seller.phoneNumber });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getOrdersDetails = async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.sellerId).populate({
            path: "orders.order",
            populate: { path: "products.product" }
        });
        if (!seller) return res.status(404).json({ success: false, message: "Seller not found" });
        res.status(200).json({ success: true, orders: seller.orders });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};



// Get Business for a Seller
export const getBusiness = async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.sellerId).populate("business");
        if (!seller) return res.status(404).json({ success: false, message: "Seller not found" });

        res.status(200).json({ success: true, business: seller.business });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Create Business
export const createBusiness = async (req, res) => {
    const {
        businessId,
        businessName,
        businessLogo,
        businessBanner,
        description,
        createdBy,
        socialLinks,
        status
    } = req.body;

    try {
        const newBusiness = await Business.create({
            businessId,
            businessName,
            businessLogo,
            businessBanner,
            description,
            createdBy,
            socialLinks,
            status
        });

        // Link business to seller (assuming 1:1 mapping)
        await Seller.findByIdAndUpdate(createdBy, { business: newBusiness._id });

        res.status(201).json({ success: true, business: newBusiness });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


export const updatePaymentGatewayDetails = async (req, res) => {
    try {
        const updatedSeller = await Seller.findByIdAndUpdate(
            req.params.sellerId,
            { paymentGatewayDetails: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, paymentGatewayDetails: updatedSeller.paymentGatewayDetails });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
