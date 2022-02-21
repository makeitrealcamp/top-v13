const API_SERVER = "http://localhost:5000";

const ENPOINTS = {
  GET_ALL: "/api/products",
};

export const getAllProducts = () => {
  const path = `${API_SERVER}${ENPOINTS.GET_ALL}`;

  return new Promise((resolve, reject) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
