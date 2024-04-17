export async function getZipCodeData({ zipCode }) {
  const ENDPOINT = import.meta.env.VITE_MEXICO_ZIP_CODES;

  try {
    const response = await fetch(`${ENDPOINT}zip_code=${zipCode}`);
    const data = await response.json();
    if (!data.zip_codes) throw new Error("Código postal no encontrado");

    return data;
  } catch (error) {
    return error.message;
  }
}
