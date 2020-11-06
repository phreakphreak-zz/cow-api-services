const Accelerometer = require("./acceleromter.model");
const accelerometerController = {};

accelerometerController.getData = async (req, res, next) => {
  const data = await Accelerometer.find();
  res.json({ data: data });
};

accelerometerController.setData = async (req, res, next) => {
  const {
    x,
    y,
    z,
    pitch,
    roll,
    inclination,
    orientation,
    acceleration,
    deviceId,
  } = req.body;

  const newAccelerometer = new Accelerometer({
    data: {
      deviceId,
      values: {
        x,
        y,
        z,
        pitch,
        roll,
        inclination,
        orientation,
        acceleration,
      },
    },
  });

  await newAccelerometer.save();
  next();
  res.json("ok");
};

module.exports = accelerometerController;
