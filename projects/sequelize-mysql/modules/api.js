const { Sequelize, Model, DataTypes } = require("sequelize");

// Active sequelize to mysql, connect db
const sequelize = new Sequelize("projectsdb", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
});

// Model Projects
const Projects = sequelize.define("Project", {
  idProject: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// Function sync
const sync = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getAllProjects = async () => {
  try {
    // Insert a new project
    const projects = await Projects.findAll();
    return projects;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const createProduct = async (newProduct) => {
  try {
    // Insert a new project
    const newProject = await Projects.create(newProduct);
    return newProject;
  } catch (error) {
    return error;
  }
};

const findProject = async (idProject) => {
  try {
    const project = await Projects.findOne({ id: idProject });
    return project;
  } catch (error) {
    console.error(error);
  }
};

const deleteProject = async (idProject) => {
  try {
    const projectToDelete = await findProject(idProject);
    const result = await projectToDelete.destroy();
    return result;
  } catch (error) {
    return error;
  }
};

const updateProject = async (idProject, object) => {
  try {
    const projectToUpdate = await findProject(idProject);
    const result = await projectToUpdate.update(object);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  sync,
  createProduct,
  getAllProjects,
  deleteProject,
  updateProject,
};
