const { Schema, model } = require("mongoose");


const thermometerSchema = new Schema(
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


module.exports = model("Thermometer", thermometerSchema);
