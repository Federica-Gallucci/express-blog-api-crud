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
  res.json({
    description: "Lettura del post " + id,
    data: post,
  });
};

const store = (req, res) => {
  res.json("creazione di un nuovo post");
};

const update = (req, res) => {
  const id = parseInt(req.params.id);

  res.json("Sostituzione del post " + id);
};

const modify = (req, res) => {
  const id = parseInt(req.params.id);

  res.json("Modifica del post " + id);
};

const destroy = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    res.status(404);
    res.json({
      error: "404 Not Found",
      message: "Post Not Found",
    });
    return;
  }

  res.json({
    data: posts,
    status: 204,
  });

  const postIndex = posts.includes(post);
  posts.slice(postIndex, 1);
};

module.exports = { index, show, store, update, modify, destroy };
