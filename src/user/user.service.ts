import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.databaseService.user.findMany();
  }

  findOne(id: string) {
    return this.databaseService.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
