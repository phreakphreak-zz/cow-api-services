const devicesController = {};
const { Device, Accelerometer } = require("./model");
const jwt = require("jsonwebtoken");

devicesController.getDevices = async (req, res, next) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

devicesController.createDevice = async (req, res, next) => {
  try {
    const {
      board,
      moduleWifi,
      macAddress,
      thermometer,
      accelerometer,
    } = req.body;
    const tokenDevice = "";
    const newDevice = new Device({
      board,
      moduleWifi,
      macAddress,
      thermometer,
      accelerometer,
      tokenDevice,
    });
    await newDevice.save();
    console.log(newDevice._id);
    res.status(200).json({
      deviceId: newDevice._id,
    });
  } catch (error) {
    res.status(400).json({
      error: err,
    });
  }
};

devicesController.getDevice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const device = await Device.findById(id);

    res.status(200).json(device);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

module.exports = devicesController;
