import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface UserBody {
  data: {
    name: string;
    email:string;
    password: string
  }
}

export class UserService {

  async createUser(user: UserBody){
    const newUser = await prisma.user.create(user)
    return { code: 201, data: newUser }
  }
}