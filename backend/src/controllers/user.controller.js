
// In user.controller.js
import User from "../models/user.model.js";
import Product from "../models/product.model.js";

export const createUser = async (req, res) => {
    const { email, name, picture, loginProvider } = req.body;
    try {
        let user = await User.findOne({ sub });
        if (!user) {
            user = await User.create({ email, name, picture, loginProvider });
        }
        res.status(200).json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


export const changePhoneNumber = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { phoneNumber: req.body.phoneNumber },
            { new: true }
        );
        res.status(200).json({ success: true, phoneNumber: user.phoneNumber });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const changeDateOfBirth = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { dateOfBirth: req.body.dateOfBirth },
            { new: true }
        );
        res.status(200).json({ success: true, dateOfBirth: user.dateOfBirth });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const changeGender = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { gender: req.body.gender },
            { new: true }
        );
        res.status(200).json({ success: true, gender: user.gender });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};




export const addProductIntoCart = async (req, res) => {
    const { userId, quantity, selectedSize, selectedColor } = req.body;
    try {
        const user = await User.findById(userId);
        user.cart.push({
            product: req.params.productId,
            quantity,
            selectedSize,
            selectedColor,
        });
        await user.save();
        res.status(200).json({ success: true, cart: user.cart });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const deleteProductFromCart = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        user.cart = user.cart.filter(item => item.product.toString() !== req.params.productId);
        await user.save();
        res.status(200).json({ success: true, cart: user.cart });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const addProductIntoWishlist = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        const product = await Product.findById(req.params.productId);

        if (!user.wishlist.includes(product._id)) user.wishlist.push(product._id);
        if (!product.likes.includes(user._id)) product.likes.push(user._id);

        await user.save();
        await product.save();

        res.status(200).json({ success: true, wishlist: user.wishlist });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const deleteProductFromWishlist = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        const product = await Product.findById(req.params.productId);

        user.wishlist = user.wishlist.filter(id => id.toString() !== product._id.toString());
        product.likes = product.likes.filter(id => id.toString() !== user._id.toString());

        await user.save();
        await product.save();

        res.status(200).json({ success: true, wishlist: user.wishlist });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const addProductIntoOrder = async (req, res) => {
    const { userId, products, totalAmount, address } = req.body;
    try {
        const user = await User.findById(userId);
        const newOrder = {
            orderId: new Date().getTime().toString(),
            products,
            totalAmount,
            address,
        };
        user.orders.push(newOrder);
        await user.save();
        res.status(200).json({ success: true, orders: user.orders });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const deleteProductsFromOrder = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        user.orders = user.orders.filter(order => order.orderId !== req.params.orderId);
        await user.save();
        res.status(200).json({ success: true, orders: user.orders });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getUserAddress = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json({ success: true, address: user.address });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const changeUserAddress = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { address: req.body }, { new: true });
        res.status(200).json({ success: true, address: user.address });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getWalletData = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json({ success: true, wallet: user.wallet });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getPaymentData = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json({ success: true, payment: user.payment });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
