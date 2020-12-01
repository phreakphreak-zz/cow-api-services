const { Schema, model } = require("mongoose");

const cowSchema = new Schema(
  {
    //marca
    brand: {
      type: String,
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
    },
    //genero
    gender: {
      type: String,
    },
    //estado
    state: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cow", cowSchema);
