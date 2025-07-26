import jwt from "jsonwebtoken";

// seller login
export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.SELLER_EMAIL ||
      password !== process.env.SELLER_PASSWORD
    ) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("sellerToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ message: "Login successful", success: true });
  } catch (error) {
    console.error("Error in sellerLogin", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// logout seller
export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.json({ message: "Seller logged out successfully", success: true });
  } catch (error) {
    console.error("Error in sellerLogout", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// check auth
export const isSellerAuth = async (req, res) => {
  try {
    const token = req.cookies.sellerToken;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized: no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.status(200).json({
      success: true,
      message: "Seller is authenticated",
      seller: decoded.email,
    });
  } catch (error) {
    console.error("Error in isSellerAuth", error);
    res.status(401).json({ success: false, message: "Unauthorized: invalid token" });
  }
};
