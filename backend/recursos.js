module.exports = {
  pacientes: [
    { tipo: "Perro", nombre: "Trosky0", obrasocial: "Camilo" },
    { tipo: "Perro", nombre: "Trosky1", obrasocial: "Camilo" },
    { tipo: "Perro", nombre: "Trosky2", obrasocial: "Camilo" },
    { tipo: "Perro", nombre: "Trosky3", obrasocial: "Camilo" },
    { tipo: "Perro", nombre: "Trosky4", obrasocial: "Camilo" },
  ],
  nosotros: [
    { nombre: "Doctorauno", apellido: "Perez", numero: "1234567890" },
    { nombre: "Doctoruno", apellido: "Gómez", numero: "4234569999" },
    { nombre: "Doctorados", apellido: "Madrid", numero: "555666777" },
    { nombre: "Doctordos", apellido: "Vasquez", numero: "1000666777" },
  ],
  obrasocial: [
    { nombre: "Ockac" },
    { nombre: "Ockak" },
    { nombre: "Ioscor" },
    { nombre: "Ioscor" },
  ],
  consultas: [
    {
      paciente: 0,
      nosotros: 0,
      fechaCreacion: new Date(),
      fechaEdicion: new Date(),
      historia: "",
      diagnostico: "diagnostico",
    },
  ],
};
