const express = require("express");
const db = require("./db/index");
const configs = require("./configs/index");
const router = require("./routers/index");
const middlewares = require("./middlewares/index");
const app = express();
app.use(express.json());

configs.serverConfig.initialServerConfig();

const PORT = process.env.PORT;

app.use(middlewares.loggerMiddleware);
app.use(middlewares.authMiddleware);

app.use("/user", router.userRouter);
app.use("/blog", router.blogRouter);
app.use("/zodiac", router.zodiacRouter);

db.mongoConnect
  .mongoConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server", PORT, "portunda çalışıyor");
    });
  })
  .catch((e) => {
    console.log("Hata oluştu:", e.message);
  });
