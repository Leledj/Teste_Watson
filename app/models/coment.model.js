module.exports = (sequelize, Sequelize) => {
    const Coment = sequelize.define('comentario', {
      comentario: {
        type: Sequelize.STRING
      }
    });
    
    return Coment;
  }