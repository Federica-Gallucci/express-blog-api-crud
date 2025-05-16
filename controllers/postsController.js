const { posts } = require("../data/posts");

const index = (req, res) => {
  res.json({
    description: "Lettura della lista di post",
    data: posts,
  });
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

  if (!post) {
    res.status(404);
    res.json({
      error: "404 Not Found",
      message: "Post Not Found",
    });
    return;
  }

  res.json({
    description: "Lettura del post " + id,
    data: post,
  });
};

const store = (req, res) => {
  // console.log(req.body);
  // console.log("____________");
  const { title, content, image, tags } = req.body;

  // controlli

  let isRequestMalformed = false;
  if (!title || typeof title !== "string") {
    isRequestMalformed = true;
  }
  if (!content || typeof content !== "string") {
    isRequestMalformed = true;
  }
  if (typeof image !== "string") {
    isRequestMalformed = true;
  }
  if (!Array.isArray(tags)) {
    isRequestMalformed = true;
  }
  if (isRequestMalformed) {
    res.status(400);
    res.json({
      error: "400 Bad Request",
      message: "Request is Malformed",
    });
    return;
  }

  //

  let maxId = 0;
  for (const post of posts) {
    if (post.id > maxId) maxId = post.id;
  }
  const newPost = { id: maxId + 1, title, content, image, tags };
  console.log(newPost);
  console.log("_________");
  posts.push(newPost);
  console.log(posts);

  res.status(201);

  res.json(newPost);
};

const update = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === postId);

  //  handle not found
  if (!post) {
    res.status(404);
    res.json({
      error: "404 Not Found",
      message: "Post Not Found",
    });
    return;
  }

  // controlli
  const { title, content, image, tags } = req.body;
  const malformedElements = [];

  if (!title || typeof title !== "string") {
    malformedElements.push("title");
  }
  if (!content || typeof content !== "string") {
    malformedElements.push("content");
  }
  if (typeof image !== "string") {
    malformedElements.push("image");
  }
  if (!Array.isArray(tags)) {
    malformedElements.push("tags");
  }
  console.log(malformedElements);
  if (malformedElements.length > 0) {
    res.status(400);
    res.json({
      error: "400 Bad Request",
      message: "Request is Malformed",
    });
    return;
  }

  // handle success

  post.title = title;
  post.content = content;
  post.image = image;
  post.id = postId;
  post.tags = tags;
  res.json(posts);
  console.log(posts);
};

const modify = (req, res) => {
  const id = parseInt(req.params.id);

  res.json("Modifica del post " + id);
};

const destroy = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  //  handle not found
  if (!post) {
    res.status(404);
    res.json({
      error: "404 Not Found",
      message: "Post Not Found",
    });
    return;
  }

  const postIndex = posts.includes(post);
  posts.splice(postIndex, 1);
  console.log(posts);

  res.json({
    data: posts,
    status: 204,
  });
};

module.exports = { index, show, store, update, modify, destroy };
