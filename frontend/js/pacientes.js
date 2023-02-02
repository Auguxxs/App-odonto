const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const obrasocial = document.getElementById("obrasocial");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const listaPacientes = document.getElementById("lista-pacientes");
const url = "http://localhost:5000/pacientes";

let pacientes = [];

async function listarPacientes() {
  try {
    const respuesta = await fetch(url);
    const pacientesDelServer = await respuesta.json();
    if (Array.isArray(pacientesDelServer)) {
      pacientes = pacientesDelServer;
    }
    if (pacientes.length > 0) {
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
      return;
    }
    listaPacientes.innerHTML = `<tr>
    <td colspan="5"> No hay pacientes</td>
    </tr>`;
  } catch (error) {
    console.log({ error });
    $(".alert").show();
  }
}

async function enviarDatos(evento) {
  evento.preventDefault();
  try {
    const datos = {
      tipo: tipo.value,
      nombre: nombre.value,
      obrasocial: obrasocial.value,
    };
    let method = "POST ";
    let urlEnvio = url;
    const accion = btnGuardar.innerHTML;
    if (accion === "Editar") {
      method = "PUT";
      pacientes[indice.value] = datos;
      urlEnvio = `${url}/indice.value`;
    }
    const respuesta = await fetch(urlEnvio, {
      method,
      headers: {
        "Content-Type": "application/json ",
      },
      body: JSON.stringify(datos),
    });
    if (respuesta.ok) {
      listarPacientes();
      resetModal();
    }
  } catch (error) {
    console.log({ error });
    $(".alert").show();
  }
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
  const urlEnvio = `${url}/${index}`;
  return async function clickEnEliminar() {
    try {
      const respuesta = await fetch(urlEnvio, {
        method: "DELETE",
      });
      if (respuesta.ok) {
        listarPacientes();
        resetModal();
      }
    } catch (error) {
      console.log({ error });
      $(".alert").show();
    }
  };
  listarPacientes();
}
form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
