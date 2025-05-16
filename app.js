// imports
const express = require("express");
const postsRouter = require(`./routers/posts`);
const notFound = require("./middleweares/notFound");
const errorHandler = require("./middleweares/errorHandler");

// express app config
const app = express();
const appPort = 3000;
const appUrl = `http://localhost:${appPort}`;

//  middlewares
app.use(express.static("public")); // static assets
app.use(express.json()); // body parsers

// routers
app.use("/posts", postsRouter);

// middleweares
app.use(notFound);
app.use(errorHandler);

//  web server listening
app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
