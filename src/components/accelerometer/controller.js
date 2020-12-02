
const {
  convertTensor,
  getData,
  createModel,
  trainModel,
  generateModel,
  deleteModel,
  loadModel,
} = require("../../services/tfjs/index");


const {
  compiler,
  modelFitArgs,
  neurons,
  inputShape,
  activationInput,
  activationOutput,
  bias,
  url,
  path_model,
  dir_model,
  mapStruct,
  filterStruct,
  mapX,
  mapY,
} = require("./config");

const accelerometerController = {};
const Accelerometer = require("./model");

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
accelerometerController.getDataApi = async (req, res, next) => {
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
accelerometerController.getDataApiById = async (req, res, next) => {
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
accelerometerController.setDataApi = async (req, res, next) => {
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
//------------------------------------------------------

/**
 * *Middleware
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @phreakphreak
 */
accelerometerController.createModelIA = async (req, res, next) => {
  try {
    const model = await createModel(
      neurons,
      inputShape,
      activationInput,
      activationOutput,
      bias
    );
    if (!model) {
      throw new Error("model no created");
    }
    req.modelIA = model;
    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

/**
 * *Middleware
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @phreakphreak
 */
accelerometerController.getDataIA = async (req, res, next) => {
  try {
    const data = await getData(url, mapStruct, filterStruct);
    if (!data) {
      throw new Error("data is not valid");
    }
    req.data = data;
    next();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**
 * *Middleware
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @phreakphreak
 */
accelerometerController.convertTensorIA = async (req, res, next) => {
  try {
    const data = req.data;
    if (!data) {
      throw new Error("data is not valid");
    } else {
      const tensors = await convertTensor(data, mapX, mapY);
      if (!tensors) {
        throw new Error("tensors is not valid");
      }
      req.tensors = tensors;
      next();
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**
 * *Middleware
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @phreakphreak
 */
accelerometerController.trainModelIA = async (req, res, next) => {
  try {
    const modelIA = req.modelIA;
    const tensors = req.tensors;
    if (!tensors && !modelIA) {
      throw new Error("data is not valid");
    }
    const { inputs, labels } = tensors;
    trainModel(modelIA, tensors, inputs, labels, compiler, modelFitArgs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * ? Route
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @phreakphreak
 */
accelerometerController.generateModelIA = async (req, res, next) => {
  try {
    const modelIA = req.modelIA;
    if (!modelIA) {
      throw new Error({
        code: 404,
        message: "model is not defined",
      });
    }
    const response = await generateModel(modelIA, path_model);
    res.status(response.code).json({ message: response.message });
  } catch (error) {
    res.status(error.code).json({ message: error.message });
  }
};







accelerometerController.loadModelIA = async (req, res, next) => {
  try {
    const response = await loadModel(path_model);
  } catch (error) {}
};

accelerometerController.deleteModelIA = async (req, res, next) => {
  try {
    const response = await deleteModel(dir_model);
    res.status(response.code).json({ message: response.message });
  } catch (error) {
    console.log(error);
    res.status(error.code).json({ message: error.message });
  }
};

accelerometerController.saveModelIA = async (req, res, next) => {};

module.exports = accelerometerController;
