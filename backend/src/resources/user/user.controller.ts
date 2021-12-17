import { UserService } from "./user.service";
import { Request, Response } from "express";

export class UseController {

  async createUser(req: Request, res: Response) {
    const user = req.body
    const { code, data } = await new UserService().createUser(user)
    return res.status(code).json(data)
  }
}