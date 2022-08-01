import express from "express";
import { handleJoin, handleLogin } from "../controller/userController";
import { handleHome, handleSearch } from "../controller/contentController";

const rootRouter = express.Router();

rootRouter.route("/").get(handleHome);
rootRouter.route("/join").get(handleJoin);
rootRouter.route("/login").get(handleLogin);
rootRouter.route("/search").get(handleSearch);

export default rootRouter;
