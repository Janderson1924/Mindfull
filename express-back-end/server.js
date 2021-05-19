const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const db = require("./lib/db");
const router = Express.Router();
const session = require("express-session");
const cors = require("cors");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(cors());

App.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
    cookie: {},
  })
);

//require routes
const usersRouter = require("../express-back-end/routes/usersRouter");
const favouritesRouter = require("../express-back-end/routes/favouritesRouter");
const postsRouter = require("../express-back-end/routes/postsRouter");
const resourcesRouter = require("../express-back-end/routes/resourcesRouter");

//app.use
App.use("/api/users", usersRouter);
App.use("/api/favourites", favouritesRouter);
App.use("/api/posts", postsRouter);
App.use("/api/resources", resourcesRouter);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
