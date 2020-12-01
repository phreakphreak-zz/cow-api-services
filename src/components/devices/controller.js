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
    if (Object.keys(req.body).length === 0) {
      throw "body without params";
    }
    const {
      number,
      board,
      moduleWifi,
      macAddress,
      thermometer,
      accelerometer,
    } = req.body;
    const tokenDevice = "";
    const newDevice = new Device({
      number,
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

devicesController.getDeviceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Device.findById(id);

    if (!data) {
      // throw new Error("data is empty");
      res.status(404).json({ message: "Id is not valid" });
    }else{
      res.status(200).json(data);
    }
    
  } catch (error) {
    
    res.status(400).json({ message: error });
  }
};

module.exports = devicesController;
