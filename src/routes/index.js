const { Router } = require("express");

const usersRouter = require("./users.routes");
const movie_notes_router = require("./movie_notes.routes");
const movie_tags_router = require("./movie_tags.routes");


const routes = Router();

routes.use("/users", usersRouter);
routes.use("/movie_notes", movie_notes_router);
routes.use("/movie_tags", movie_tags_router);

module.exports = routes;