const { Schema, model } = require("mongoose");
const deviceSchema = new Schema(
  {
    number: {
      type: Number,
      default: 0,
    },
    board: String,
    moduleWifi: String,
    macAddress: String,
    thermometer: String,
    accelerometer: String,
    tokenDevice: String,
  },
  {
    timestamps: true,
  }
);

module.exports.Device = model("Device", deviceSchema);
