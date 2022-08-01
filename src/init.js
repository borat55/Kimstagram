import express from "express";
import morgan from "morgan";
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import contentRouter from "./router/contentRouter";

const app = express();
const loggerMiddleware = morgan("dev");

const PORT = 5000;

app.use(loggerMiddleware);
app.use("/", rootRouter);
app.use("/content", contentRouter);
app.use("/user", userRouter);

const handleListen = () =>
  console.log(`✔ Server listening on localhost ${PORT} 🚀`);
app.listen(PORT, handleListen);
