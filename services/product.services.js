const { find } = require("../models/Package");
const Package = require("../models/Package");

exports.getPackagesService = async (queries) => {
  const package = await Package.find({})
    .skip(queries.skip)
    .limit(queries.limit || 4)
    .sort(queries.sortBy)
    .select(queries.fields);
  return package;
};

exports.createPackageService = async (data) => {
  const package = await Package.create(data);
  return package;
};

exports.getPackageByIdService = async (id) => {
  const package = await Package.findOneAndUpdate(
    { _id: id },
    {
      $inc: { viewCount: 1 },
    }
  );
  // const package = await Package.findById(id);
  return package;
};

exports.updatePackageService = async (id, data) => {
  const result = Package.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

exports.getTrendingPackagesService = async () => {
  const packages = await Package.find({}).sort("-viewCount").limit(3);
  return packages;
};

exports.getCheapestPackagesService = async () => {
  const packages = await Package.find({}).sort("price").limit(3);
  return packages;
};
