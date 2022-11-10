const express = require("express");
const router = express.Router();
const packageController = require("../controllers/package.controller");

router.route("/trending").get(packageController.trendingPackages);
router.route("/cheapest").get(packageController.cheapestPackages);

router
  .route("/")
  .get(packageController.getPackages)
  .post(packageController.createPackage);

router
  .route("/:id")
  .get(packageController.getPackageById)
  .patch(packageController.updatePackageById);

module.exports = router;
