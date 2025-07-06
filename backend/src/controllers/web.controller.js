import WebsiteData from "../models/web.model.js ";
// ─── Controllers ────────────────────────────────────────────

// Initialize default document if not present
const getOrCreateWebsiteDoc = async () => {
    let doc = await WebsiteData.findOne();
    if (!doc) doc = await WebsiteData.create({});
    return doc;
};

// ─── Nav Controllers ─
export const getNavBar = async (req, res) => {
    try {
        const data = await getOrCreateWebsiteDoc();
        const { logoImage, logoText, topNavItems, bottomNavItems } = data;
        res.json({ logoImage, logoText, topNavItems, bottomNavItems });
    } catch (err) {
        res.status(500).json({ message: "Failed to get navbar data" });
    }
};

export const updateLogo = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        const { logoImage, logoText,applicationName } = req.body;
        if (logoImage) doc.logoImage = logoImage;
        if (logoText) doc.logoText = logoText;
        if (applicationName) doc.applicationName = applicationName;
        await doc.save();
        console.log(doc);
        res.json({ logoImage: doc.logoImage, logoText: doc.logoText });
    } catch (err) {
        res.status(500).json({ message: "Failed to update logo" });
    }
};

export const updateTopNav = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        doc.topNavItems = req.body.topNavItems || [];
        await doc.save();
        res.json({ topNavItems: doc.topNavItems });
    } catch (err) {
        res.status(500).json({ message: "Failed to update top nav" });
    }
};

export const updateBottomNav = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        doc.bottomNavItems = req.body.bottomNavItems || [];
        await doc.save();
        res.json({ bottomNavItems: doc.bottomNavItems });
    } catch (err) {
        res.status(500).json({ message: "Failed to update bottom nav" });
    }
};

// ─── Home Controllers ─
export const getHomeData = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        const {
            headerImage,
            headerText,
            imageSlider,
            productSlider,
            trendingCategories,
            advertisementPanel,
        } = doc;
        res.json({
            headerImage,
            headerText,
            imageSlider,
            productSlider,
            trendingCategories,
            advertisementPanel,
        });
    } catch (err) {
        res.status(500).json({ message: "Failed to get homepage data" });
    }
};

export const updateHeader = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        const { headerImage, headerText } = req.body;
        if (headerImage !== undefined) doc.headerImage = headerImage;
        if (headerText !== undefined) doc.headerText = headerText;
        await doc.save();
        res.json({ headerImage: doc.headerImage, headerText: doc.headerText });
    } catch (err) {
        res.status(500).json({ message: "Failed to update header" });
    }
};

export const updateImageSlider = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        doc.imageSlider = req.body.imageSlider || [];
        await doc.save();
        res.json({ imageSlider: doc.imageSlider });
    } catch (err) {
        res.status(500).json({ message: "Failed to update image slider" });
    }
};

export const updateProductSlider = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        doc.productSlider = req.body.productSlider || [];
        await doc.save();
        res.json({ productSlider: doc.productSlider });
    } catch (err) {
        res.status(500).json({ message: "Failed to update product slider" });
    }
};

export const updateTrendingCategories = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        doc.trendingCategories = req.body.trendingCategories || [];
        await doc.save();
        res.json({ trendingCategories: doc.trendingCategories });
    } catch (err) {
        res.status(500).json({ message: "Failed to update trending categories" });
    }
};

export const updateAdvertisementPanel = async (req, res) => {
    try {
        const doc = await getOrCreateWebsiteDoc();
        doc.advertisementPanel = req.body.advertisementPanel || [];
        await doc.save();
        res.json({ advertisementPanel: doc.advertisementPanel });
    } catch (err) {
        res.status(500).json({ message: "Failed to update ads panel" });
    }
};

