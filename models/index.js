const models = {
  usersModel: require("./mysql/users"),
  formsModel: require("./mysql/forms"),
  eventsModel: require("./mysql/events"),
  productsModel: require("./mysql/products"),
  storageModel: require("./mysql/storage"),
};

module.exports = models;
