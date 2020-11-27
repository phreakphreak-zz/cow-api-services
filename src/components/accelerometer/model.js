const { Schema, model } = require("mongoose");

const accelerometerSchema = new Schema(
  {
    data: {
      deviceId: {
        type: String,
      },
      values: {
        type: Map,
        of: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Accelerometer", accelerometerSchema);
