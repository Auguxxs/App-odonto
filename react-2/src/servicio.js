const API_URL = "https://app-odonto-backend.vercel.app/";

export const listarEntidad = async ({ entidad = "pacientes" }) => {
  try {
    const respuesta = await fetch(`${API_URL}/${entidad}`);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log({ error });
  }
};
