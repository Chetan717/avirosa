const TourProgram = require("../Modal/TourModal");

// Create a new tour program
const createTourProgram = async (req, res) => {
  try {
    const newTourProgram = new TourProgram(req.body);
    const { createdBy } = req.body;
    const findTour = await TourProgram.findOne({
      createdBy,
      // The tour program is not expired.
      // The tour program is active.
      Act: true,
    });

    res.setHeader("Content-Type", "application/json");

    if (findTour && findTour.Act === true) {
      return res
        .status(409)
        .json({ message: "The previous tour program is not expired." });
    }

    await newTourProgram.save();
    res
      .status(200)
      .json({ message: "Tour-program created wait for approval!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Get all tour programs
const getAllTourPrograms = async (req, res) => {
  try {
    const allTourPrograms = await TourProgram.find();
    res.status(200).json(allTourPrograms);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get tour program by ID
const getTourProgramById = async (req, res) => {
  try {
    const tourProgram = await TourProgram.findById(req.params.id);
    if (!tourProgram) {
      return res.status(404).json({ message: "Tour program not found" });
    }
    res.status(200).json(tourProgram);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/// find program by userId
const getTourProgramByUserId = async (req, res) => {
  try {
    const createdBy = req.params.id;
    const tourProgram = await TourProgram.find({ createdBy: createdBy });

    if (!tourProgram) {
      return res.status(404).json({ message: "Tour program not found" });
    }
    res.status(200).json(tourProgram);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Update tour program by ID
const updateTourProgramById = async (req, res) => {
  try {
    const updatedTourProgram = await TourProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTourProgram) {
      return res.status(404).json({ message: "Tour program not found" });
    }
    res.status(200).json(updatedTourProgram);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Delete tour program by ID
const deleteTourProgramById = async (req, res) => {
  try {
    const deletedTourProgram = await TourProgram.findByIdAndDelete(
      req.params.id
    );
    if (!deletedTourProgram) {
      return res.status(404).json({ message: "Tour program not found" });
    }
    res.status(200).json({ message: "Tour program deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createTourProgram,
  getAllTourPrograms,
  getTourProgramById,
  updateTourProgramById,
  getTourProgramByUserId,
  deleteTourProgramById,
};
