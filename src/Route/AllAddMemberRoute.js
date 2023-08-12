const express = require("express");
const router = express.Router();

const doctorController = require("../Controller/DoctorAddCon");
const chemistController = require("../Controller/ChemAddCon");
const stockiestController = require("../Controller/StockiestAddCon");
const tourProgramController = require("../Controller/TourAddCon");

// Doctor routes
router.post("/doc", doctorController.createDoctor);
router.get("/doc", doctorController.getAllDoctors);
router.get("/doc/:id", doctorController.getDoctorById);
router.put("/doc/:id", doctorController.updateDoctorById);
router.delete("/doc/:id", doctorController.deleteDoctorById);

// Chemist routes
router.post("/chem", chemistController.createChemist);
router.get("/chem", chemistController.getAllChemists);
router.get("/chem/:id", chemistController.getChemistById);
router.put("/chem/:id", chemistController.updateChemistById);
router.delete("/chem/:id", chemistController.deleteChemistById);

// Stockiest routes
router.post("/stock", stockiestController.createStockiest);
router.get("/stock", stockiestController.getAllStockiests);
router.get("/stock/:id", stockiestController.getStockiestById);
router.put("/stock/:id", stockiestController.updateStockiestById);
router.delete("/stock/:id", stockiestController.deleteStockiestById);

// TourProgram routes
router.post("/tour", tourProgramController.createTourProgram);
router.get("/tour", tourProgramController.getAllTourPrograms);
router.get("/tour/:id", tourProgramController.getTourProgramById);
router.put("/tour/:id", tourProgramController.updateTourProgramById);
router.delete(
  "/tour/:id",
  tourProgramController.deleteTourProgramById
);

module.exports = router;
