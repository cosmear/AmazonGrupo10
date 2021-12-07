const express = require('express');
const productos = require('../productos');

const detalleController = {
    index: (req, res) => {
        const id = req.params.id;
        const producto = productos.filter( producto => {
            return producto.id == id
        });
        
        res.render('detalleProducto', {producto: producto});
    }
}

module.exports = detalleController;