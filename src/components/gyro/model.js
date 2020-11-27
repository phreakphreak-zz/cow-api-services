const { Schema, model } = require("mongoose");


const gyroSchema = new Schema(
  {
    data: {
      deviceId: {
        type:String
      },
      values: {
        type:Map,
        of:Number,
      },
    },
  },
  {
    timestamps: true,
  }
);


module.exports = model("Gyro", gyroSchema);
