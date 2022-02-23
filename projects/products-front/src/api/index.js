const API_SERVER = "http://localhost:5000";

const ENPOINTS = {
  GET_ALL: "/api/products",
  CREATE: "/api/products/create",
  DELETE: "/api/products/delete",
  LOGIN: "/api/login",
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

export const createProduct = (product) => {
  const path = `${API_SERVER}${ENPOINTS.CREATE}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const deleteProduct = (id) => {
  const path = `${API_SERVER}${ENPOINTS.DELETE}/${id}`;

  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const login = (user) => {
  const path = `${API_SERVER}${ENPOINTS.LOGIN}`;

  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve({ token: data.token });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
