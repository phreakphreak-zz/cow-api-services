const { Schema, model } = require("mongoose");

const cowSchema = new Schema(
  {
    //marca
    brand: {
      type: String,
      required: true,
    },
    //edad
    ageMonth: {
      type: Number,
    },
    //numero
    number: {
      type: Number,
    },
    //fecha ingreso
    entryDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    //fecha salida
    exitDate: {
      type: Date,
    },
    //fecha nacimientobirthday
    //peso inicial
    startingWeight: {
      type: Schema.Types.Decimal128,
    },
    //peso final
    finalWeight: {
      type: Schema.Types.Decimal128,
    },
    //raza
    race: {
      type: String,
      required: true,
    },
    //genero
    gender: {
      type: String,
      required: true,
    },
    //estado
    state: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cow", cowSchema);
