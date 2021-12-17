import { Router, Request, Response } from "express";
import { UseController } from "../resources/user/user.controller";

const userRouter = Router();

userRouter.post('/', new UseController().createUser)

export default userRouter;