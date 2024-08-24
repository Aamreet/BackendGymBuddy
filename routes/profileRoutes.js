const express = require("express");
const router= express.Router();
const {getAllProfiles, getAProfile}= require("../controllers/profileControllers");
const requireAuth = require("../middleware/requireAuth");

router.get("/profiles", getAllProfiles)
router.use(requireAuth);
router.get("/profile", getAProfile)

module.exports = router;