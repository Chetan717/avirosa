const UserAuthModal = require("../Modal/UserAuthModal");
const Jwt = require("jsonwebtoken"); // for generating jwt token
const bcrypt = require("bcryptjs"); //for decript the values
const secreat_key = "Next@717";
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const nodemailer = require("nodemailer");

//getting all user data on Route /User
const handleAuthRequest = (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = Jwt.verify(token, secreat_key);

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const userdata = async (req, res) => {
  try {
    const userData = await UserAuthModal.find();

    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send("something went Wrong");
  }
};

// sign in fuction for route /User/Signin
const SignInUser = async (req, res) => {
  try {
    const { Email, otp } = req.body;

    console.log(otp);
    // first find the user
    const findUser = await UserAuthModal.findOne({ Email });

    // if user not found then throw error "User not Found"
    if (!findUser) {
      return res.status(401).json({ message: "User Not Found" });
    }

    if (!otp) {
      return res.status(400).json({ message: "OTP is required" });
    }

    // Signing in with OTP
    // Check if the provided OTP matches the user's OTP
    if (otp !== findUser.otp) {
      return res.status(401).json({ message: "Invalid OTP" });
    }

    // Clear the OTP after successful sign-in
    findUser.otp = undefined;
    await findUser.save();

    // user is found and OTP is valid, then send token.

    // token for login
    const tokenForLogin = Jwt.sign({ userId: findUser._id }, secreat_key, {
      expiresIn: "1h",
    });

    res.status(200).json(tokenForLogin);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
    console.log(error);
  }
};

const SignupUser = async (req, res) => {
  console.log(req.body);
  try {
    const {
      Code,
      empName,
      userId,
      mobile1,
      Secmob,
      address,
      email,
      post,
      headquarters,
      panNo,
      adharNo,
      bankAccountNo,
      ifscCode,
      dob,
      joiningDate,
      anniversaryDate,
      resignationDate,
      selectedAreas,
      pvrRemark,
      online,
      Active,
      Banned,
      pass,
    } = req.body;

    const user = await UserAuthModal.findOne({ email });
    const userCode = await UserAuthModal.findOne({ Code });
    const userids = await UserAuthModal.findOne({ userId });

    // check if user already exists
    if (user) {
      return res.status(409).json({ message: "Email is Already Exists!" });
    }
    if (user) {
      return res.status(409).json({ message: "Code is Already Exists!" });
    }
    if (user) {
      return res.status(409).json({ message: "User Id is Already Exists!" });
    }

    // encrypt password using bcrypt hash
    // const encryptedPass = await bcrypt.hash(password, 10);

    // create a new user and save it to the database
    const newUser = new UserAuthModal({
      Code,
      empName,
      userId,
      mobile1,
      Secmob,
      address,
      email,
      post,
      headquarters,
      panNo,
      adharNo,
      bankAccountNo,
      ifscCode,
      dob,
      joiningDate,
      anniversaryDate,
      resignationDate,
      selectedAreas,
      pvrRemark,
      online,
      Active,
      Banned,
      pass,
    });
    await newUser.save();

    res.status(200).send({ massage: "User Added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong!" });
    console.log(error);
  }
};

const requestOTP = async (req, res) => {
  const { Email } = req.body;

  try {
    const user = await UserAuthModal.findOne({ Email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Generate a random OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    let config = {
      service: "gmail",
      auth: {
        user: "soilbooster717@gmail.com",
        pass: "wscdqfcvrepantgv",
      },
    };

    let transporter = nodemailer.createTransport(config);

    let message = {
      from: "soilbooster717@gmail.com",
      to: Email,
      subject: "🔥 Otp-Donot Share To anyone  🔥",
      text: `otp ${otp}`,
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Soil Booster Technologies</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign in procedures. OTP is valid for 5 minutes</p>
          <p>📢📢 Use Once and dont worry next time its not valid.😂  </p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">🔥 ${otp} 🔥</h2>
          <p style="font-size:0.9em;">Regards,<br />Soil Booster Technologies.</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Soil booster technologies</p>
            <p>Nashik - 422001</p>
            <p>Sinnar</p>
          </div>
        </div>
      </div>`,
    };

    let info = transporter.sendMail(message);
    // save the generated OTP to the user in the database
    user.otp = otp;
    await user.save();

    // send the response
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
    console.log(error);
  }
};

// In your module file
const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    const updatedUser = await UserAuthModal.findByIdAndUpdate(
      userId,
      updatedData,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User Updated Succesfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
    console.log(error);
  }
};

// In your module file
const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await UserAuthModal.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
    console.log(error);
  }
};

module.exports = {
  SignupUser,
  SignInUser,
  handleAuthRequest,
  updateUserById,
  deleteUserById,
  userdata,
  requestOTP,
};
