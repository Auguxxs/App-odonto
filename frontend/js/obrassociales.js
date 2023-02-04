const nombre = document.getElementById("nombre");
const numero = document.getElementById("numero");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const listaObrasocial = document.getElementById("lista-obrasocial");
const url = "http://localhost:5000/obrassociales";
let obrassociales = [];

async function listarObrasociales() {
  try {
    const respuesta = await fetch(url);
    const obrassocialesDelServer = await respuesta.json();
    if (Array.isArray(obrassocialesDelServer)) {
      obrassociales = obrassocialesDelServer;
    }
    if (obrassociales.length > 0) {
      const htmlobrassociales = obrassociales
        .map(
          (obrassociales, index) => `<tr>
          <th scope="row">${index}</th>
          <td>${obrassociales.documento}</td>
          <td>${obrassociales.nombre}</td>
          
          <td>
              <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                  <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
              </div>
          </td>
        </tr>`
        )
        .join("");
      listaObrasocial.innerHTML = htmlobrassociales;
      Array.from(document.getElementsByClassName("editar")).forEach(
        (botonEditar, index) => (botonEditar.onclick = editar(index))
      );
      Array.from(document.getElementsByClassName("eliminar")).forEach(
        (botonEliminar, index) => (botonEliminar.onclick = eliminar(index))
      );
      return;
    }
    listaObrasocial.innerHTML = `<tr>
      <td colspan="5" class="lista-vacia">No hay obras sociales</td>
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
    const obrassociales = obrassociales[index];
    indice.value = index;
    nombre.value = obrassociales.nombre;
    documento.value = obrassociales.documento;
  };
}

function resetModal() {
  indice.value = "";
  nombre.value = "";
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
        listarObrasociales();
      }
    } catch (error) {
      console.log({ error });
      $(".alert").show();
    }
  };
}

listarObrasociales();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
