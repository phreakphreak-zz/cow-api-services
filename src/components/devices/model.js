const { Schema, model } = require("mongoose");
const deviceSchema = new Schema(
  {
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


