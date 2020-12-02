module.exports = {
  compiler: {
    optimizer: "sgd",
    loss: "meanSquaredError",
    metrics: ["mse"],
  },
  modelFitArgs: {
    batchSize: 32,
    epochs: 50,
    shuffle: true,
    callbacks: {
      onEpochEnd: (epoch, log) => {
        console.log(`Epoch ${epoch}: loss = ${log.loss}`);
      },
    },
  },

  neurons: [16, 32, 64, 32, 16, 1],
  inputShape: [8, 16, 32, 64, 32, 16],
  activationInput: "relu",
  activationOutput: "sigmoid",
  bias: true,
  url: "",
  dir_model: "/src/components/accelerometer/tfjs-model",
  path_model: "file://./src/components/accelerometer/tfjs-model",
  mapStruct: () => {},
  filterStruct: () => {},
  mapX: () => {},
  mapY: () => {},
};
