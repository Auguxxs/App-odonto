const recursos = require("./recursos");
const pacientes = require("./rutas/pacientes");
const nosotros = require("./rutas/nosotros");
const obrasocial = require("./rutas/obrasocial");
const consultas = require("./rutas/consultas");

module.exports = {
  ruta: (data, callback) => {
    callback(200, { mensaje: "esta es /ruta" });
  },
  pacientes: pacientes(recursos.pacientes),
  nosotros: nosotros(recursos.nosotros),
  obrasocial: obrasocial(recursos.obrasocial),
  consultas: consultas(recursos),
  noEncontrado: (data, callback) => {
    callback(404, { mensaje: "no encontrado" });
  },
};