const thermometerController = {};
const Thermometer = require("./model");

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
thermometerController.getData = async (req, res, next) => {
  try {
    const data = await Thermometer.find();
    if (Object.keys(data).length === 0) {
      throw new Error("data is not available");
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
thermometerController.getDataById = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("ID has not been provided");
    }
    console.log(id);
    const data = await Thermometer.find({
      "data.deviceId": id,
    });
    if (Object.keys(data).length === 0) {
      throw new Error("Data is not available");
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
thermometerController.setData = async (req, res, next) => {
  try {
    const { C, F, K, deviceId } = req.body;

    const newThermometer = new Thermometer({
      data: {
        deviceId: deviceId,
        values: {
          C: C,
          F: F,
          K: K,
        },
      },
    });

    await newThermometer.save();
    res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = thermometerController;
