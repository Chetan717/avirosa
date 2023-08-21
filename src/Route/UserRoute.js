const express = require("express");
const UserAuthModal = require("../Modal/UserAuthModal");
const router = express.Router();
const {
  SignInUser,
  SignupUser,
  handleAuthRequest,
  updateUserById,
  deleteUserById,
  userdata,
  requestOTP,
} = require("../Controller/UserController");

router.route("/UserDetail").get(userdata);

router.get("/auth", handleAuthRequest, async (req, res) => {
  try {
    // Access the decoded user data from the request object
    const user = req.user

   
    // Fetch additional user data from the database (example using Mongoose)
    const userData = await UserAuthModal.findById(user.userId).select("-pass");

    // If user data is found, send it to the client
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
});

router.route("/signup").post(SignupUser);
router.route("/signup/:id").put(updateUserById);
router.route("/signup/:id").delete(deleteUserById);
router.route("/signin/verify").post(requestOTP);

router.route("/signin").post(SignInUser);
// router.route("/confirm").post(sendOrderConfirmedMassage);
// router.route("/Deliver").post(sendOrderDeliveredMassage);

module.exports = router;
