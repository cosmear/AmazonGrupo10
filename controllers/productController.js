const path = require("path");
const controller = {    
    aceitunasgriegas : (req, res) => {
        res.render('aceitunasnegras');
    },
    aceitunasverdes : (req, res) => {
        res.render('aceitunasverdes');
    },
    elia5lt : (req, res) => {
        res.render('elia5lt');
    },
    elia3lt : (req, res) => {
        res.render('elia3lt');
    },
    elia500ml : (req, res) => {
        res.render('elia500ml');
    },
    libanti5lt : (req, res) => {
        res.render('libanti5lt');
    },
    libanti3lt : (req, res) => {
        res.render('libanti3lt');
    },
    libanti1lt : (req, res) => {
        res.render('libanti1lt');
    },
    libanti500ml : (req, res) => {
        res.render('libanti500ml');
    }
};

module.exports =controller;