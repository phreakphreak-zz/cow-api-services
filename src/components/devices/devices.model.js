const { Schema, model } = require("mongoose");
const deviceSchema = new Schema(
  {
    numberSerie: {
      type: Number,
    },
    tokenDevice: {
      type: String,
    },
    macAdress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Device", deviceSchema);
