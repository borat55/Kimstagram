import express from "express";
import {
  handleNewPost,
  handleWatch,
  handleEdit,
  handleDelete,
} from "../controller/contentController";

const contentRouter = express.Router();

contentRouter.route("/:id(\\d+)").get(handleWatch);
contentRouter.route("/:id(\\d+)/edit").get(handleEdit);
contentRouter.route("/:id(\\d+)/delete").get(handleDelete);
contentRouter.route("/upload").get(handleNewPost);

export default contentRouter;
