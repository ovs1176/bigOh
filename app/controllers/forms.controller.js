const db = require("../models");
const validator = require('validator');
const Forms = db.forms;
const FormData = db.formData;
const Op = db.Sequelize.Op;



function validationFunc(body, dataType) {


  const { uniqueId, name, email, phoneNumber, isGraduated } = body;

  let uniqueIdDataType = dataType?.uniqueId
  let nameDataType = dataType?.name
  let emailDataType = dataType?.email
  let phoneNumberDataType = dataType?.phoneNumber
  let isGraduatedDataType = dataType?.isGraduated


  let DataTypeNotMatch = [];

  // UniqueId 
  if (uniqueIdDataType === "UUID" && !validator.isUUID(uniqueId.toString())) DataTypeNotMatch.push("uniqueId");
  else if (uniqueIdDataType === "String" && !(typeof (uniqueId) === "string")) DataTypeNotMatch.push("uniqueId");
  else if (uniqueIdDataType === "Boolean" && !(typeof (uniqueId) === "boolean")) DataTypeNotMatch.push("uniqueId");
  else if (uniqueIdDataType === "Int" && !(typeof (uniqueId) === "number")) DataTypeNotMatch.push("uniqueId");
  else if (uniqueIdDataType === "Float" && !validator.isFloat(uniqueId.toString())) DataTypeNotMatch.push("uniqueId");
  else if (uniqueIdDataType === "Decimal" && !validator.isDecimal(uniqueId.toString())) DataTypeNotMatch.push("uniqueId");
  else if (uniqueIdDataType === "Email" && !validator.isEmail(uniqueId.toString())) DataTypeNotMatch.push("uniqueId");
  else if (uniqueIdDataType === "Date" && !validator.isDate(uniqueId.toString())) DataTypeNotMatch.push("uniqueId");
  else if (uniqueIdDataType === "JSON" && !validator.isJSON(uniqueId.toString())) DataTypeNotMatch.push("uniqueId");

  // name 
  if (nameDataType === "UUID" && !validator.isUUID(name.toString())) DataTypeNotMatch.push("name");
  else if (nameDataType === "String" && !(typeof (name) === "string")) DataTypeNotMatch.push("name");
  else if (nameDataType === "Boolean" && !(typeof (name) === "boolean")) DataTypeNotMatch.push("name");
  else if (nameDataType === "Int" && !(typeof (name) === "number")) DataTypeNotMatch.push("name");
  else if (nameDataType === "Float" && !validator.isFloat(name.toString())) DataTypeNotMatch.push("name");
  else if (nameDataType === "Decimal" && !validator.isDecimal(name.toString())) DataTypeNotMatch.push("name");
  else if (nameDataType === "Email" && !validator.isEmail(name.toString())) DataTypeNotMatch.push("name");
  else if (nameDataType === "Date" && !validator.isDate(name.toString())) DataTypeNotMatch.push("name");
  else if (nameDataType === "JSON" && !validator.isJSON(name.toString())) DataTypeNotMatch.push("name");


  // email 
  if (emailDataType === "UUID" && !validator.isUUID(email.toString())) DataTypeNotMatch.push("email");
  else if (emailDataType === "String" && !(typeof (email) === "string")) DataTypeNotMatch.push("email");
  else if (emailDataType === "Boolean" && !(typeof (email) === "boolean")) DataTypeNotMatch.push("email");
  else if (emailDataType === "Int" && !(typeof (email) === "number")) DataTypeNotMatch.push("email");
  else if (emailDataType === "Float" && !validator.isFloat(email.toString())) DataTypeNotMatch.push("email");
  else if (emailDataType === "Decimal" && !validator.isDecimal(email.toString())) DataTypeNotMatch.push("email");
  else if (emailDataType === "Email" && !validator.isEmail(email.toString())) DataTypeNotMatch.push("email");
  else if (emailDataType === "Date" && !validator.isDate(email.toString())) DataTypeNotMatch.push("email");
  else if (emailDataType === "JSON" && !validator.isJSON(email.toString())) DataTypeNotMatch.push("email");


  // phoneNumber 
  if (phoneNumberDataType === "UUID" && !validator.isUUID(phoneNumber.toString())) DataTypeNotMatch.push("phoneNumber");
  else if (phoneNumberDataType === "String" && !(typeof (phoneNumber) === "string")) DataTypeNotMatch.push("phoneNumber");
  else if (phoneNumberDataType === "Boolean" && !(typeof (phoneNumber) === "boolean")) DataTypeNotMatch.push("phoneNumber");
  else if (phoneNumberDataType === "Int" && !(typeof (phoneNumber) === "number")) DataTypeNotMatch.push("phoneNumber");
  else if (phoneNumberDataType === "Float" && !validator.isFloat(phoneNumber.toString())) DataTypeNotMatch.push("phoneNumber");
  else if (phoneNumberDataType === "Decimal" && !validator.isDecimal(phoneNumber.toString())) DataTypeNotMatch.push("phoneNumber");
  else if (phoneNumberDataType === "Email" && !validator.isEmail(phoneNumber.toString())) DataTypeNotMatch.push("phoneNumber");
  else if (phoneNumberDataType === "Date" && !validator.isDate(phoneNumber.toString())) DataTypeNotMatch.push("phoneNumber");
  else if (phoneNumberDataType === "JSON" && !validator.isJSON(phoneNumber.toString())) DataTypeNotMatch.push("phoneNumber");

  // isGraduated 
  if (isGraduatedDataType === "UUID" && !validator.isUUID(isGraduated.toString())) DataTypeNotMatch.push("isGraduated");
  else if (isGraduatedDataType === "String" && !(typeof (isGraduated) === "string")) DataTypeNotMatch.push("isGraduated");
  else if (isGraduatedDataType === "Boolean" && !(typeof (isGraduated) === "boolean")) DataTypeNotMatch.push("isGraduated");
  else if (isGraduatedDataType === "Int" && !(typeof (isGraduated) === "number")) DataTypeNotMatch.push("isGraduated");
  else if (isGraduatedDataType === "Float" && !validator.isFloat(isGraduated.toString())) DataTypeNotMatch.push("isGraduated");
  else if (isGraduatedDataType === "Decimal" && !validator.isDecimal(isGraduated.toString())) DataTypeNotMatch.push("isGraduated");
  else if (isGraduatedDataType === "Email" && !validator.isEmail(isGraduated.toString())) DataTypeNotMatch.push("isGraduated");
  else if (isGraduatedDataType === "Date" && !validator.isDate(isGraduated.toString())) DataTypeNotMatch.push("isGraduated");
  else if (isGraduatedDataType === "JSON" && !validator.isJSON(isGraduated.toString())) DataTypeNotMatch.push("isGraduated");



  return DataTypeNotMatch;



}

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  const { uniqueId, title, name, email, phoneNumber, isGraduated } = req.body

  let isFormExist = await Forms.findAll({ where: { title } });

  if (isFormExist?.length) return res.status(404).send({ status: false, message: `${title} already exist. ` })

  const validDataTypes = ["String", "Boolean", "Int", "Float", "Decimal", "UUID", "Email", "Date", "JSON"];
  let missingFields = [];
  if (!uniqueId) missingFields.push('uniqueId');
  if (!title) missingFields.push('title');
  if (!name) missingFields.push('name');
  if (!email) missingFields.push('email');
  if (!phoneNumber) missingFields.push('phoneNumber');
  if (!isGraduated) missingFields.push('isGraduated');

  if (missingFields.length) return res.status(400).send({ status: false, message: 'Missing required field(s): ' + missingFields.join(', ') });

  let validDataTypeFields = [];
  if (!validDataTypes.includes(uniqueId)) validDataTypeFields.push('uniqueId');
  // if(!validDataTypes.includes(title))  validDataTypeFields.push('title');
  if (!validDataTypes.includes(name)) validDataTypeFields.push('name');
  if (!validDataTypes.includes(email)) validDataTypeFields.push('email');
  if (!validDataTypes.includes(phoneNumber)) validDataTypeFields.push('phoneNumber');
  if (!validDataTypes.includes(isGraduated)) validDataTypeFields.push('isGraduated');
  if (validDataTypeFields.length) return res.status(403).send({ status: false, message: 'Enter valid datatype(s): ' + validDataTypeFields.join(', '), validDataTypes });

  // Create a new form
  const newForm = {
    "uniqueId": uniqueId,
    "title": title,
    "name": name,
    "email": email,
    "phoneNumber": phoneNumber,
    "isGraduated": isGraduated
  };

  // Save form in the database
  Forms.create(newForm)
    .then(data => {
      res.status(201).send({ status: true, message: "Form created successfully. ", data });
    })
    .catch(err => {
      res.status(500).send({
        status: false,
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// Create and Save a new FillData
exports.createFillData = async (req, res) => {
  const { title } = req.query;
  const { uniqueId, name, email, phoneNumber, isGraduated } = req.body;

  let isFormExist = await Forms.findAll({ where: { title } });
  if (!isFormExist?.length) return res.status(404).send({ status: false, message: `${title} form doesn't exist.` })

  let missingFields = [];
  if (!uniqueId) missingFields.push('uniqueId');
  if (!name) missingFields.push('name');
  if (!email) missingFields.push('email');
  if (!phoneNumber) missingFields.push('phoneNumber');
  if (!isGraduated) missingFields.push('isGraduated');

  if (missingFields.length) return res.status(400).send({ status: false, message: 'Missing required field(s): ' + missingFields.join(', ') });

  let DataTypeNotMatch = validationFunc(req.body, isFormExist[0]);

  if (DataTypeNotMatch.length) {
    return res.status(404).send({ status: false, message: `data type does not match(s) : ${DataTypeNotMatch.join(',')}` })
  }

  // ADD data entry form here ------------------- 

  // Create a new form
  const newForm = {
    "uniqueId": uniqueId,
    "title": title,
    "name": name,
    "email": email,
    "phoneNumber": phoneNumber,
    "isGraduated": isGraduated
  };

  // Save form in the database
  FormData.create(newForm)
    .then(data => {
      res.status(201).send({ status: true, message: "data filled successfully. ", data });
    })
    .catch(err => {
      res.status(500).send({
        status: false,
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

};

// Retrieve all form fill data from the database.
exports.findAll = async (req, res) => {
  const title = req.query.title;
  
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  let data = await FormData.findAll({ where: condition });
  return res.status(200).send({status : true,  title, data })

};


