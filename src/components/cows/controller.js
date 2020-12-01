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

cowsController.getCowById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Cow.findById(id);

    if (!data) {
      res.status(404).json({ message: "Id is not valid" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

cowsController.createCow = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw "body without params";
    }
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
    res.status(200).json({message:"Cow created"});
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

cowsController.deleteCow = async (req, res, next) => {
  const { id } = req.params;
  await Cow.findByIdAndDelete(id);
  res.json("Cow deleted");
};

module.exports = cowsController;
