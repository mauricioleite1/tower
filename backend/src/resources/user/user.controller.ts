import { UserService } from "./user.service";
import { Request, Response } from "express";

export class UseController {

  async createUser(req: Request, res: Response) {
    const { message } = await new UserService().createUser()
    return res.status(201).json(message)
  }
}