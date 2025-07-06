import Owner from "../models/owner.model.js";

// POST /login
export const loginOwner = async (req, res) => {
    try {
        const { email, fullName, picture, loginProvider, role, phoneNumber, gender, dateOfBirth } = req.body;

        let owner = await Owner.findOne({ email });

        if (!owner) {
            owner = new Owner({
                email,
                fullName,
                picture,
                loginProvider,
                role,
                phoneNumber,
                gender,
                dateOfBirth,
            });
            await owner.save();
        }

        res.status(200).json(owner);
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};

// DELETE /:id
export const deleteOwner = async (req, res) => {
    try {
        const { id } = req.params;
        const owner = await Owner.findByIdAndDelete(id);

        if (!owner) return res.status(404).json({ message: "Owner not found" });

        res.status(200).json({ message: "Owner deleted", owner });
    } catch (error) {
        res.status(500).json({ message: "Error deleting owner", error: error.message });
    }
};

// DELETE /
export const deleteAllOwners = async (req, res) => {
    try {
        await Owner.deleteMany({});
        res.status(200).json({ message: "All owners deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting all owners", error: error.message });
    }
};

// GET /:id
export const getOwner = async (req, res) => {
    try {
        const { id } = req.params;
        const owner = await Owner.findById(id);

        if (!owner) return res.status(404).json({ message: "Owner not found" });

        res.status(200).json(owner);
    } catch (error) {
        res.status(500).json({ message: "Error fetching owner", error: error.message });
    }
};

// GET /
export const getAllOwners = async (req, res) => {
    try {
        const owners = await Owner.find();
        res.status(200).json(owners);
    } catch (error) {
        res.status(500).json({ message: "Error fetching owners", error: error.message });
    }
};

// PUT /:id
export const updateOwnerDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedOwner = await Owner.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });

        if (!updatedOwner) return res.status(404).json({ message: "Owner not found" });

        res.status(200).json(updatedOwner);
    } catch (error) {
        res.status(500).json({ message: "Error updating owner", error: error.message });
    }
};
