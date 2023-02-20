const listaConsultas = document.getElementById("lista-consultas");
const obraSocial = document.getElementById("obra-social");
const profesional = document.getElementById("profesional");
const diagnostico = document.getElementById("diagnostico");
const comentario = document.getElementById("comentario");
const indice = document.getElementById("indice");
const btnGuardar = document.getElementById("btn-guardar");

let consultas = [];
let obraSociales = [];
let profesionales = [];
const url = "http://localhost:5000";

async function listarConsultas() {
  const entidad = "consultas";
  try {
    const respuesta = fetch(`${url}/${entidad}`);
    const consultasDelServidor = await respuesta.json();
    if (Array.isArray(consultasDelServidor)) {
      consultas = consultasDelServidor;
    }
    if (respuesta.ok) {
      const htmlConsultas = consultas
        .map(
          (consulta, indice) =>
            `<tr>
            <th scope="row">2</th>
            <td>${consulta.paciente} </td>
            <td>${consulta.nosotros.nombre} ${consulta.nosotros.apellido}</td>
            <td>${consulta.diagnostico} </td>
            <td>${consulta.fechaCreacion} </td>
            <td>${consulta.fechaEdicion} </td>

            <td>@fat</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
              </div>
            </td>
          </tr>`
        )
        .join("");
      listaConsultas.innerHTML = htmlConsultas;
      Array.from(document.getElementsByClassName("editar")).forEach(
        (botonEditar, index) => (botonEditar.onclick = editar(index))
      );
    }
  } catch (error) {
    console.log({ error });
    $(".alert-danger").show();
  }
}

async function listarObraSocial() {
  const entidad = "obrasocial";
  try {
    const respuesta = fetch(`${url}/${entidad}`);
    const obraSocialDelServidor = await respuesta.json();
    if (Array.isArray(obraSocialDelServidor)) {
      obraSociales = obraSocialDelServidor;
    }
    if (respuesta.ok) {
      obraSocial.forEach((_obraSocial, indice) => {
        const optionActual = document.createElement("option");
        optionActual.innerHTML = _obraSocial.nombre;
        optionActual.value = indice;
        obraSocial.appendChild(optionActual);
      });
    }
  } catch (error) {
    console.log({ error });
    $(".alert-danger").show();
  }
}

async function listarProfesionales() {
  const entidad = "profesionales";
  try {
    const respuesta = fetch(`${url}/${entidad}`);
    const profesionalesDelServidor = await respuesta.json();
    if (Array.isArray(profesionalesDelServidor)) {
      profesionales = profesionalesDelServidor;
    }
    if (respuesta.ok) {
      profesionales.forEach((_profesional, indice) => {
        const optionActual = document.createElement("option");
        optionActual.innerHTML = `${_profesional.nombre} ${_profesional.apellido}`;
        optionActual.value = indice;
        profesional.appendChild(optionActual);
      });
    }
  } catch (error) {
    console.log({ error });
    $(".alert-danger").show();
  }
}

function editar(index) {
  return function cuandoCliqueo() {
    btnGuardar.innerHTML = "Editar";
    $("#exampleModalCenter").modal("toggle");
    const consulta = consultas[index];
    indice.value = index;
    obraSocial.value = consulta.obraSocial.id;
    profesional.value = consulta.profesional.id;
    diagnostico.value = consulta.diagnostico;
    comentario.value = consulta.comentario;
  };
}
async function enviarDatos(evento) {
  const entidad = "consultas";
  evento.preventDefault();
  try {
    const datos = {
      obraSocial: obraSocial.value,
      profesional: profesional.value,
      diagnostico: diagnostico.value,
      comentario: comentario.value,
    };
    if (validar(datos) === true) {
      const accion = btnGuardar.innerHTML;
      let urlEnvio = `${url}/${entidad}`;
      let method = "POST";
      if (accion === "Editar") {
        urlEnvio += `/${indice.value}`;
        method = "PUT";
      }

      const respuesta = await fetch(urlEnvio, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
        mode: "cors",
      });
      if (respuesta.ok) {
        listarConsultas();
        resetModal();
      }
      formulario.classList.add("was-validated");
      return;
    }
    $(".alert-warning").show();
  } catch (error) {
    console.log({ error });
    $(".alert-danger").show();
  }
}

function resetModal() {
  btnGuardar.innerHTML = "Crear";
  [indice, obraSocial, profesional, diagnostico, comentario].forEach(
    (imputActual) => {
      imputActual.value = "";
      imputActual.classList.remove("is-invalid");
      imputActual.classList.remove("is-valid");
    },
    $(".alert-warning").hide(),
    $("#exampleModalCenter").modal("toggle")
  );

  indice.value = "";
  obraSocial.value = "";
  profesional.value = "";
  diagnostico.value = "";
  comentario.value = "";
  $("#exampleModalCenter").modal(toggle);
}

function validar(datos) {
  if (typeof datos !== "object") return false;
  let respuesta = true;
  for (let llave in datos) {
    if (datos[llave].length === 0) {
      document.getElementById(llave).classList.add("is-invalid");
      respuesta = false;
    } else {
      document.getElementById(llave).classList.remove("is-invalid");
      document.getElementById(llave).classList.add("is-valid");
    }
  }
  if (respuesta === true) $(".alert-warning").hide();
  return respuesta;
}

btnGuardar.onclick = enviarDatos;

listarConsultas();
listarObraSocial();
listarProfesionales();
