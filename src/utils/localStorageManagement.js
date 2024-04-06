export function handleSaveDataInLocalStorage({ key, data, expirationMinutes }) {
  if (localStorage.getItem(key)) localStorage.removeItem(key);

  const expirationTime = new Date().getTime() + expirationMinutes * 60 * 1000; // Tiempo actual más el número de minutos en milisegundos
  const dataToSave = { data: data, expiration: expirationTime };
  localStorage.setItem(key, JSON.stringify(dataToSave));
}

export function handleGetDataFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));

  if (!data) return null;

  const currentTime = new Date().getTime();
  if (currentTime > data.expiration) {
    localStorage.removeItem(key);
  } else {
    return data.data;
  }
}
