const accelerometerController = {};
const Accelerometer = require("./model");

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
accelerometerController.getData = async (req, res, next) => {
  try {
    const data = await Accelerometer.find();
    if (Object.keys(data).length === 0) {
      throw new Error("data is not avalible");
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
accelerometerController.getDataById = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("id is not provided");
    }
    console.log(id);
    const data = await Accelerometer.find({
      "data.deviceId": id,
    });
    if (Object.keys(data).length === 0) {
      throw new Error("data is not avalible");
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
accelerometerController.setData = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw "body without params";
    }
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
  
    if(!x){
      throw new Error("datos vacios");
    }
    const newAccelerometer = new Accelerometer({
      data: {
        deviceId: deviceId,
        values: {
          x: x,
          y: y,
          z: z,
          pitch: pitch,
          roll: roll,
          inclination: inclination,
          orientation: orientation,
          acceleration: acceleration,
        },
      },
    });
  
    await newAccelerometer.save();
    res.status(200).json({message:"ok"});
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = accelerometerController;
