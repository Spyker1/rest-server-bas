const { response } = require('express')

const usariosGet = (req, res = response) => {

  const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.json({
      msg: "get API",
      q,
      nombre,
      apikey,
      page,
      limit
    });
  }
  
  const usariosPost = (req, res) => {
    
    const { nombre, edad } = req.body;
    
    
    res.status(201).json({
      msg: "post API ",
      nombre, edad
    });
  }
  
  const usariosPut = (req, res, response) => {
    
    const { nombre, edad } = req.body;

    const id = req.params.id;
    
    res.status(500).json({
      msg: "put API",
      nombre, 
      edad,
      id
    });
  }

  const usariosPatch = (req, res) => {
    
    const { nombre, edad } = req.body;
    
    res.json({
      msg: "patch API",
      nombre, edad
    });
  }

  const usariosDelete = (req, res) => {
    
    const { nombre, edad } = req.body;

    res.json({
      msg: "delete API",
      nombre, edad
    });
  }


  module.exports = {
    usariosGet,
    usariosPost,
    usariosPut,
    usariosPatch,
    usariosDelete
  }
