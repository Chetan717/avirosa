const Doctor = require("../Modal/DoctorModal");

// Create a new doctor
const createDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);

    const { DoctorCode } = req.body;
    const findCode = await Chemist.findOne({ DoctorCode });
    if (findCode) {
      return res.status(409).json({ message: "Code is Already Exists!" });
    }
    await newDoctor.save();
    res.status(200).json({ message: "Doctor Added Sucessfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const allDoctors = await Doctor.find();
    res.status(200).json(allDoctors);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update doctor by ID
const updateDoctorById = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor Profile update success !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete doctor by ID
const deleteDoctorById = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
};
