// imports
const express = require("express");
const postRouter = require(`./routers/posts`);

// express app config
const app = express();
const appPort = 3000;
const appUrl = `http://localhost:${appPort}`;

//routers
app.use("/posts", postRouter);

app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
