import api from "../api";

export async function getCountryByName(name: string) {
  return new Promise((resolve, reject) => {
    api
      .get(`/name/${name}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
