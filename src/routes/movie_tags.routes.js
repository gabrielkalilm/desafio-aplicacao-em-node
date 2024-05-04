const { Router } = require("express");

const MovieTagsController = require("../controllers/MovieTagsController");

const MovieTagsRoutes = Router();

const movieTagsController = new MovieTagsController();

MovieTagsRoutes.get("/:user_id", movieTagsController.index);

module.exports = MovieTagsRoutes;