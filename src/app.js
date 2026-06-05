const express = require("express");
const cors = require("cors");

const authRoutes =
  require("./routes/auth.route");

const postRoutes =
  require("./routes/post.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/posts",
  postRoutes
);

app.get("/", (req, res) => {

  res.json({
    message:
      "NoLimit Backend Test API"
  });

});

module.exports = app;