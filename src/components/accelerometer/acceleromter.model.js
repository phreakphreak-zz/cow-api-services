const { Schema, model } = require("mongoose");
const accelerometerShema = new Schema(
  {
    data: {
      deviceId: Number,
      values: {
        x: Number,
        y: Number,
        z: Number,
        pitch: Number,
        roll: Number,
        inclination: Number,
        orientation: Number,
        acceleration: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Accelerometer", accelerometerShema);
