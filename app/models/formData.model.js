module.exports = (sequelize, Sequelize) => {
  const FormData = sequelize.define("form_data", {
    uniqueId: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    email: { 
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    isGraduated: {
      type: Sequelize.STRING
    } 
  });

  return FormData;
};

