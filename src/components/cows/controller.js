const cowsController = {};
const Cow = require("./model");

cowsController.getCows = async (req, res, next) => {
  try {
    const cows = await Cow.find();
    res.json(cows);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

cowsController.createCow = async (req, res, next) => {
  try {
    const {
      brand,
      ageMonth,
      number,
      entryDate,
      exitDate,
      startingWeight,
      finalWeight,
      race,
      gender,
      state,
    } = req.body;

    const newCow = new Cow({
      brand,
      ageMonth,
      number,
      entryDate,
      exitDate,
      startingWeight,
      finalWeight,
      race,
      gender,
      state,
    });
    await newCow.save();
    res.json("Cow created");
  } catch (e) {
    res.status(400).json({
      error: err,
    });
  }
};

cowsController.deleteCow = async (req, res, next) => {
  const { id } = req.params;
  await Cow.findByIdAndDelete(id);
  res.json("Cow deleted");
};

module.exports = cowsController;
