import Address from "../models/address.model.js";

// Create Address — /api/address/add
export const addAddress = async (req, res) => {
  try {
    const userId = req.user;
    const { name, phone, address, city, state, pincode } = req.body;

    await Address.create({
      ...address,
      userId,
    });

    return res.status(201).json({ message: "Address added successfully", success: true });
  } catch (error) {
    console.error("Error adding address", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Get Addresses — /api/address/user
export const getAddresses = async (req, res) => {
  try {
    const userId = req.user;
    const addresses = await Address.find({ userId }).sort({ createdAt: -1 });

    return res.status(200).json({ addresses, success: true });
  } catch (error) {
    console.error("Error fetching addresses", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
