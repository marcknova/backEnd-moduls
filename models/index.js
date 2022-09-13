const models = {
  usersModel: require("./mysql/users"),
  formsModel: require("./mysql/forms"),
  productsModel: require("./mysql/products"),
  storageModel: require("./mysql/storage"),
};

module.exports = models;
