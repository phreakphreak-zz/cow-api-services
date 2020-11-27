const gyroController = {};
const Gyro = require("./model");

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
gyroController.getData = async (req, res, next) => {
  try {
    const data = await Gyro.find();
    if (Object.keys(data).length === 0 ) {
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
gyroController.getDataById = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("ID has not been provided");
    }
    console.log(id);
    const data = await Gyro.find({
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
gyroController.setData = async (req, res, next) => {
  try {
    const { x, y, z, pitch, roll, yaw, deviceId } = req.body;

    const newGyro = new Gyro({
      data: {
        deviceId: deviceId,
        values: {
          x: x,
          y: y,
          z: z,
          pitch: pitch,
          roll: roll,
          yaw: yaw,
        },
      },
    });

    await newGyro.save();
    res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = gyroController;
