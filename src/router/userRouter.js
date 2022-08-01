import express from "express";
import {
  handleProfile,
  handleEdit,
  handleDelete,
  handleLogout,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.route("/:id(\\d+)").get(handleProfile);
userRouter.route("/edit").get(handleEdit);
userRouter.route("/delete").get(handleDelete);
userRouter.route("/logout").get(handleLogout);

export default userRouter;
