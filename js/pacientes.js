const listaPacientes = document.getElementById("lista-pacientes");

let pacientes = [
  {
    nombre: "Juan",
    apellido: "Perez",
    documento: "40123456",
    obrasocial: "Ioscor",
  },
];

function listarPacientes() {
  const htmlPacientes = pacientes
    .map(
      (paciente, indice) => `<tr>
  <th scope="row">${indice} </th>
  <td>${paciente.nombre} </td>
  <td>${paciente.apellido} </td>
  <td>${paciente.documento} </td>
  <td>${paciente.obrasocial} </td>
  <td>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-info">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="btn btn-danger">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </td>
</tr> `
    )
    .join("");
  listaPacientes.innerHTML = htmlPacientes;
}
