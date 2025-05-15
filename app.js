// imports
const express = require("express");
const postsRouter = require(`./routers/posts`);

// express app config
const app = express();
const appPort = 3000;
const appUrl = `http://localhost:${appPort}`;

//  middlewares
app.use(express.static("public")); // static assets
app.use(express.json()); // body parsers

// routers
app.use("/posts", postsRouter);

//  web server listening
app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
