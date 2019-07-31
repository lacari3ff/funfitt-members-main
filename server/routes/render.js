const Router = require("express").Router();

const renderController = require("../controllers/render");

Router.get("/get-full-page", (req, res, next) => {
  renderController.getPageLayout(req, res);
});

module.exports = Router;
