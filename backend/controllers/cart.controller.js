import User from "../models/user.model.js";


//update user cartData /api/cart/update

export const updateCart = async (req, res) => {
    try {
        const userId = req.user;
        const { cartItems } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            { cartData: cartItems },
            { new: true }
        )
          if(!updatedUser) {
            return res
            .status(404)
            .json({message: "user not found", success: false, message: "Cart updated successfully"})
        }
        res.status(200).json({ updatedUser, success: true})
    } catch (error) {
         res.status(500).json({message: "server error", error: error.message})
    }
}