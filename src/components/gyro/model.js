const { Schema, model } = require("mongoose");


const gyroSchema = new Schema(
  {
    data: {
      deviceId: {
        type:String
      },
      axes: {
        type:Map,
        of:Number,
      },
      angles:{
        type:Map,
        of:Object
      }
    },
  },
  {
    timestamps: true,
  }
);


module.exports = model("Gyro", gyroSchema);
