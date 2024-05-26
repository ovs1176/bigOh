module.exports = (sequelize, Sequelize) => {
  const Form = sequelize.define("form", {
    uniqueId: {
      type: Sequelize.STRING
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

  return Form;
};
  