module.exports = app => {
  const formController = require("../controllers/forms.controller.js");
  var router = require("express").Router();

  app.use("/", router);


  // Retrieve all forms
  router.get("/fill_data", formController.findAll);

  // Create a new form
  router.post("/form", formController.create);


  // create to fill data
  router.post("/fill_data", formController.createFillData);

};
