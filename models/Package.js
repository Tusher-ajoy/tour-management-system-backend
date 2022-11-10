const mongoose = require("mongoose");

//schema design
const packageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this package"],
      trim: true,
      unique: [true, "Title must be unique"],
      minLength: [5, "Title must be minimum 5 character"],
      maxLength: [50, "Title is too large"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for the package"],
    },
    image: {
      type: String,
      required: [true, "Please provide a image for the package"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    country: {
      type: String,
      required: [true, "Please provide a country name for the package"],
    },
    place: {
      type: String,
      required: [true, "Please provide at least one place for the package"],
    },
    noOfDay: {
      type: Number,
      required: true,
      min: [1, "Tour day can't be less then one"],
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["running", "temporary-off", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    viewCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
