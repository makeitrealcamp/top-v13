import axios from "axios";

export const sendImage = (name, file) => {
  console.log("SendImage", name, file);

  const form = new FormData();
  form.append("name", name);
  form.append("file", file, "form-data");
  const apiUrl = "http://localhost:5000/upload";
  axios.post(apiUrl, form).then((result) => {
    console.log("Result image uploaded ", result);
  });
};
