const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(
  express.json({ extended: true })
);

app.use(
  "/api/todo",
  require("./routes/todo.routes")
);
// app.use(
//   "/api/auth",
//   require("./routes/auth.routes")
// );
// app.use(
//   "/api/products",
//   require("./routes/product.routes")
// );

const PORT = config.get("port") || 5080;

async function start() {
  try {
    await mongoose.connect(
      config.get("mongoUri"),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    app.listen(PORT, () =>
      console.log(
        `App has been starder on port ${PORT}...`
      )
    );
  } catch (e) {
    console.log(
      "Server Error",
      e.message
    );
    process.exit(1);
  }
}

start();
