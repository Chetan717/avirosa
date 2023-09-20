const DcrDoctor = require("../Modal/DcrDoc");

// Create a new doctor

const createDoctor = async (req, res) => {
  try {
    // const { DoctorCode, DcrId } = req.body;
    // const tourProgram = await DcrDoctor.findOne({
    //   DcrId: DcrId,
    //   DoctorCode: DoctorCode,
    // });
    // if (tourProgram) {
    //   return res
    //     .status(409)
    //     .json({ message: "DCR Of This Doctor Already Added!" });
    // }
    const newDoctor = new DcrDoctor(req.body);
    await newDoctor.save();
    res.status(200).json({ message: "Doctor Added Sucessfully !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const allDoctors = await DcrDoctor.find();
    res.status(200).json(allDoctors);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const doctor = await DcrDoctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getDoctorByTourId = async (req, res) => {
  try {
    // const createdBy = req.params.id;
    // const tourProgram = await DcrDoctor.find({ createdBy: createdBy });
    const dcrid = req.params.id;
    const tourProgram = await DcrDoctor.find({ DcrId: dcrid });
    if (!tourProgram) {
      return res
        .status(404)
        .json({ message: " Dcr Chemist Not Found not found" });
    }
    res.status(200).json(tourProgram);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Update doctor by ID
const updateDoctorById = async (req, res) => {
  try {
    const updatedDoctor = await DcrDoctor.findByIdAndUpdate(
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
    const deletedDoctor = await DcrDoctor.findByIdAndDelete(req.params.id);
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
  getDoctorByTourId,
  updateDoctorById,
  deleteDoctorById,
};
