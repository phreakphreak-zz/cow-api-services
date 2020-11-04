const devicesController = {};
const Device = require("./devices.model");




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
    const { components, macAdress } = req.body;
    const tokenDevice = "";
    const newDevice = new Device({
      tokenDevice,
      macAdress,
      components,
    });
    await newDevice.save();
    console.log(newDevice._id);
    res
      .status(200)
      .json({
        token: tokenDevice,
        deviceId: newDevice._id,
        msg: "device created",
      });
  } catch (error) {
    res.status(400).json({
      error: err,
    });
  }
};

devicesController.getDevice = async (req,res,next)=>{
    try {
        const { id } = req.params;
        const device = await Device.findById(id)
        res.status(200).json(device);
      } catch (err) {
        res.status(400).json({
          error: err,
        });
      }
}

module.exports = devicesController;
