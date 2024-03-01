const{ Router } = require ("express");


const  TagsController = require("../controllers/TagsController");
const notesRoutes = require("./notes.routes");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);

module.exports = tagsRoutes;