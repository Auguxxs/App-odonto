const nombre = document.getElementById("nombre");
const documento = document.getElementById("documento");
const apellido = document.getElementById("apellido");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const listaNosotros = document.getElementById("lista-Nosotros");
const url = "https://app-odonto-backend.vercel.app/nosotros";
let nosotros = [];

async function listarNosotros() {
  try {
    const respuesta = await fetch(url);
    const nosotrosDelServer = await respuesta.json();
    if (Array.isArray(nosotrosDelServer)) {
      nosotros = nosotrosDelServer;
    }
    if (nosotros.length > 0) {
      const htmlNosotros = nosotros
        .map(
          (nosotros, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${nosotros.documento}</td>
        <td>${nosotros.nombre}</td>
        <td>${nosotros.apellido}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
            </div>
        </td>
      </tr>`
        )
        .join("");
      listaNosotros.innerHTML = htmlNosotros;
      Array.from(document.getElementsByClassName("editar")).forEach(
        (botonEditar, index) => (botonEditar.onclick = editar(index))
      );
      Array.from(document.getElementsByClassName("eliminar")).forEach(
        (botonEliminar, index) => (botonEliminar.onclick = eliminar(index))
      );
      return;
    }
    listaNosotros.innerHTML = `<tr>
    <td colspan="5" class="lista-vacia">No hay odontologos</td>
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
      nombre: nombre.value,
      apellido: apellido.value,
      documento: documento.value,
    };
    const accion = btnGuardar.innerHTML;
    let urlEnvio = url;
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
      listarNosotros();
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
    const nosotros = nosotros[index];
    indice.value = index;
    nombre.value = nosotros.nombre;
    apellido.value = nosotros.apellido;
    documento.value = nosotros.documento;
  };
}

function resetModal() {
  indice.value = "";
  nombre.value = "";
  apellido.value = "";
  documento.value = "";
  btnGuardar.innerHTML = "Crear";
}

function eliminar(index) {
  const urlEnvio = `${url}/${index}`;
  return async function clickEnEliminar() {
    try {
      const respuesta = await fetch(urlEnvio, {
        method: "DELETE",
        mode: "cors",
      });
      if (respuesta.ok) {
        listarNosotros();
      }
    } catch (error) {
      console.log({ error });
      $(".alert").show();
    }
  };
}

listarNosotros();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
