const express = require("express");
const router = express.Router();

const doctorController = require("../Controller/DoctorAddCon");
const chemistController = require("../Controller/ChemAddCon");
const AreaController = require("../Controller/AddArea");
const PrRtController = require("../Controller/PrRt");
const HeadQ = require("../Controller/AddHeadQ");
const FareController = require("../Controller/AddStdFare");
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

// Area routes
router.post("/area", AreaController.createArea);
router.get("/area", AreaController.getAllAreas);
router.get("/area/:id", AreaController.getAreaById);
router.put("/area/:id", AreaController.updateAreaById);
router.delete("/area/:id", AreaController.deleteAreaById);

// Area routes
router.post("/headq", HeadQ.createHeadQ);
router.get("/headq", HeadQ.getAllHeadQs);
router.get("/headq/:id", HeadQ.getHeadQById);
router.put("/headq/:id", HeadQ.updateHeadQById);
router.delete("/headq/:id", HeadQ.deleteHeadQById);

// Area routes
router.post("/stdfare", FareController.createAddStdFare);
router.get("/stdfare", FareController.getAllAddStdFares);
router.get("/stdfare/:id", FareController.getAddStdFareById);
router.put("/stdfare/:id", FareController.updateAddStdFareById);
router.delete("/stdfare/:id", FareController.deleteAddStdFareById);

// Area routes
router.post("/proRate", PrRtController.createPrRt);
router.get("/proRate", PrRtController.getAllPrRts);
router.get("/proRate/:id", PrRtController.getPrRtById);
router.put("/proRate/:id", PrRtController.updatePrRtById);
router.delete("/proRate/:id", PrRtController.deletePrRtById);

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
router.delete("/tour/:id", tourProgramController.deleteTourProgramById);

module.exports = router;
