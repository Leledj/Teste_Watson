module.exports = function(app) {
 
    var express = require("express");
    var router = express.Router();
    
    const coments = require('../controllers/coment.controller.js');
    
    var path = __basedir + '/views/';
    
    router.use(function (req,res,next) {
      console.log("/" + req.method);
      next();
    });
    
    app.get('/', (req,res) => {
      res.sendFile(path + "index.html");
    });
   
      
      app.post('/api/coments/save', coments.save);
   
      
      app.get('/api/coments/all', coments.findAll);
    
    app.use("/",router);
   
    
  }