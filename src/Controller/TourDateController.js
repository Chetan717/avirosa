const TourDate = require("../Modal/TourDate");

// Create a new tour program
const createTourDate = async (req, res) => {
  try {
    const { Date, Id, DcrId } = req.body;

    const AlreadySubmitDate = await TourDate.find({
      DcrId: `${DcrId}`,
      Date: Date,
    });

    const FindSelectedDate = AlreadySubmitDate?.map((i) => i._id);
    const ID = FindSelectedDate.toString();
    console.log(ID);

    if (ID) {
      const updatedTourDate = await TourDate.findByIdAndUpdate(ID, req.body, {
        new: true,
      });

      if (!updatedTourDate) {
        return res.status(404).json({ message: "Tour Date not found" });
      }
      res.status(200).json(updatedTourDate);
    } else {
      const newTourProgramByDate = new TourDate(req.body);
      await newTourProgramByDate.save();
      res.status(200).json({ message: `${Date}-Tour-program Added !` });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Get all tour Date
const getAllTourDate = async (req, res) => {
  try {
    const allTourDate = await TourDate.find();
    res.status(200).json(allTourDate);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get tour program by ID
const getTourDateById = async (req, res) => {
  try {
    const tourDate = await TourDate.findById(req.params.id);
    if (!tourDate) {
      return res.status(404).json({ message: "Tour Date not found" });
    }
    res.status(200).json(tourDate);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/// find program by userId
const getTourDateByUserId = async (req, res) => {
  try {
    const dcr = req.params.id;
    const tourDate = await TourDate.find({ DcrId: dcr });

    if (!tourDate) {
      return res.status(404).json({ message: "Tour Date not found" });
    }
    res.status(200).json(tourDate);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// Update tour program by ID
const updateTourDateById = async (req, res) => {
  try {
    const updatedTourDate = await TourDate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTourDate) {
      return res.status(404).json({ message: "Tour Date not found" });
    }
    res.status(200).json(updatedTourDate);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete tour program by ID
const deleteTourDateById = async (req, res) => {
  try {
    const deletedTourDate = await TourDate.findByIdAndDelete(req.params.id);
    if (!deletedTourDate) {
      return res.status(404).json({ message: "Tour Date not found" });
    }
    res.status(200).json({ message: "Tour Date deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createTourDate,
  getAllTourDate,
  getTourDateById,
  updateTourDateById,
  getTourDateByUserId,
  deleteTourDateById,
};
