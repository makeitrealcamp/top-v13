export const loginAsync = async (data) => {
  const URL = "https://todo-app-2-backend.herokuapp.com/user/login";

  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  const result = await response.json();
  const { status } = result;

  return status === 1 ? true : false;
};
