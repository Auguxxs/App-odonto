const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const obrasocial = document.getElementById("obrasocial");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const listaPacientes = document.getElementById("lista-pacientes");

let pacientes = [];

async function listarPacientes() {
  try {
    const respuesta = await fetch("http://localhost:5000/pacientes");
    const pacientesDelServer = await respuesta.json();
    if (Array.isArray(pacientesDelServer) && pacientesDelServer.length > 0) {
      pacientes = pacientesDelServer;
    }
    const htmlPacientes = pacientes
      .map(
        (paciente, index) => `<tr>
    <th scope="row">${index}</th>
    <td>${paciente.tipo}</td>
    <td>${paciente.nombre}</td>
    <td>${paciente.obrasocial}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
  </tr>`
      )
      .join("");
    listaPacientes.innerHTML = htmlPacientes;
    Array.from(document.getElementsByClassName("editar")).forEach(
      (botonEditar, index) => (botonEditar.onclick = editar(index))
    );
    Array.from(document.getElementsByClassName("eliminar")).forEach(
      (botonEliminar, index) => (botonEliminar.onclick = eliminar(index))
    );
  } catch (error) {
    throw error;
  }
}

async function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
    tipo: tipo.value,
    nombre: nombre.value,
    obrasocial: obrasocial.value,
  };
  const accion = btnGuardar.innerHTML;
  switch (accion) {
    case "Editar":
      pacientes[indice.value] = datos;
      break;
    default:
      pacientes.push(datos);
      break;
  }
  listarPacientes();
  resetModal();
}

function editar(index) {
  return function cuandoCliqueo() {
    btnGuardar.innerHTML = "Editar";
    $("#exampleModalCenter").modal("toggle");
    const paciente = pacientes[index];
    nombre.value = paciente.nombre;
    obrasocial.value = paciente.obrasocial;
    tipo.value = paciente.tipo;
    indice.value = index;
  };
}

function resetModal() {
  nombre.value = "";
  obrasocial.value = "";
  tipo.value = "";
  indice.value = "";
  btnGuardar.innerHTML = "Crear";
}

function eliminar(index) {
  return function clickEnEliminar() {
    pacientes = pacientes.filter(
      (paciente, indicePaciente) => indicePaciente !== index
    );
    listarPacientes();
  };
  listarPacientes();
}

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
