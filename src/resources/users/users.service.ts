// import { User } from './entities/user.entity';
import { DatabaseService } from '../../database/database.service';
import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  // db: DatabaseService;
  constructor(private readonly databaseService: DatabaseService) {
    // this.db = databaseService;
  }

  create(createUserDto: Prisma.UserCreateInput): Promise<User> {
    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  findAll(): Promise<User[]> {
    return this.databaseService.user.findMany();
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.databaseService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new HttpException(`User with id = ${id} is not found!`, HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findOneByEmail(email?: string): Promise<User> {
    const user = await this.databaseService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new HttpException(`User with ${email} is not found!`, HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async update(id: number, updateUserDto: Partial<UpdateUserDto>) {
    try {
      const user = await this.databaseService.user.update({
        where: {
          id,
        },
        data: updateUserDto,
      });

      return user;
    } catch (error) {
      throw new HttpException(`User #${id} is not found!`, HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    try {
      const user = await this.databaseService.user.delete({
        where: {
          id,
        },
      });

      return user;
    } catch (error) {
      throw new HttpException(`User with id = ${id} is not found!`, HttpStatus.NOT_FOUND);
    }
  }
}
