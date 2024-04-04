export async function getZipCode({ zipCode }) {
  const ENDPOINT = import.meta.env.VITE_MEXICO_ZIP_CODES;
  const API_KEY = import.meta.env.VITE_MEXICO_ZIP_CODES_API_KEY;
  try {
    const response = await fetch(`${ENDPOINT}codigo_postal/${zipCode}`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "mexico-zip-codes.p.rapidapi.com",
      },
    });
    const data = await response.json();
    if (!data.estado) throw new Error("Código postal no encontrado");

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
