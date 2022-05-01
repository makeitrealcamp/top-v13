const express = require("express");

const {
  sync,
  createProduct,
  getAllProjects,
  deleteProject,
  updateProject,
} = require("./modules/api");

const app = express();

// GET
app.get("/products", async (req, res) => {
  await sync();
  const projects = await getAllProjects();
  res.json(projects);
});

// POST
app.post("/product/create", async (req, res) => {
  await sync();
  const result = await createProduct({
    idProject: 1,
    name: "Project Cuatro",
    description: "This is a test project",
  });
  res.json(result);
});

// DELETE
app.delete("/product/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await deleteProject(Number(id));
  res.json(result);
});

// UPDATE
app.put("/product/update/:id", async (req, res) => {
  const { id } = req.params;
  const obj = { name: "New project" };
  const result = await updateProject(id, obj);
  res.json(result);
});

app.listen(4001, () => {
  console.log("Server mysql api ok!");
});
