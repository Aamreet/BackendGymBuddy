const express = require("express");
const router= express.Router();
const {getAllProfiles, getAProfile}= require("../controllers/profileControllers");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/profile", getAProfile)
router.get("/profiles", getAllProfiles)

module.exports = router;


