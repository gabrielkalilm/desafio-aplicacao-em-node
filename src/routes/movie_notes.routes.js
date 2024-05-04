const { Router } = require("express");

const MovieNotesController = require("../controllers/MovieNotesController");

const MovieNotesRoutes = Router();

const movieNotesController = new MovieNotesController();

MovieNotesRoutes.get("/", movieNotesController.index);
MovieNotesRoutes.post("/:user_id", movieNotesController.create);
MovieNotesRoutes.get("/:id", movieNotesController.show);
MovieNotesRoutes.delete("/:id", movieNotesController.delete);

module.exports = MovieNotesRoutes;