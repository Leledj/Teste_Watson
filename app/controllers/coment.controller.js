const db = require('../config/db.config.js');
const Coment = db.coment;
 
exports.save = (req, res) => {
  console.log('Envia o comentario: ' + JSON.stringify(req.body));
  
  Coment.create({
    comentario: req.body.comentario
  },{
    attributes: {include: ['comentario']}
  }).then(coment => {
    res.send(coment);
  })
};
 

exports.findAll = (req, res) => {
  console.log("Pega todos os comentarios");
  Coment.findAll({
    attributes: ['id', 'comentario']
  }).then(coments => {
     res.send(coments);
  });
};