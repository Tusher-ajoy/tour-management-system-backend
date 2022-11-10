const {
  getPackagesService,
  createPackageService,
  getPackageByIdService,
  updatePackageService,
  getTrendingPackagesService,
  getCheapestPackagesService,
} = require("../services/product.services");

exports.getPackages = async (req, res, next) => {
  try {
    // const excludeFields = ["sort", "page", "limit", "fields"];
    // excludeFields.forEach((field) => delete queries[field]);

    const queries = {};
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    if (req.query.page) {
      const { page = 1, limit = 4 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const packages = await getPackagesService(queries);
    res.status(200).json({
      status: "Success",
      data: packages,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Can't get data",
      error: error.message,
    });
  }
};

exports.createPackage = async (req, res, next) => {
  try {
    const result = await createPackageService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getPackageById = async (req, res, next) => {
  try {
    const package = await getPackageByIdService(req.params.id);
    res.status(200).json({
      status: "Success",
      data: package,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Can't get data",
      error: error.message,
    });
  }
};

exports.updatePackageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updatePackageService(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully update the package",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Can't Patch data",
      error: error.message,
    });
  }
};

exports.trendingPackages = async (req, res, next) => {
  console.log("Outside Tranding");
  try {
    const result = await getTrendingPackagesService();
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Can't get data",
      error: error.message,
    });
  }
};

exports.cheapestPackages = async (req, res, next) => {
  try {
    const result = await getCheapestPackagesService();
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Can't get data",
      error: error.message,
    });
  }
};
