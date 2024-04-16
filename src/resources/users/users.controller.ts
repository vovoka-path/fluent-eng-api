import { UsersModule } from './users.module';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PrismaClient, Prisma, type User } from '@prisma/client';
// import { User, Prisma } from '@prisma/client';

type IUser = User;

import { Swagger } from '../../swagger/swagger.module';
import * as swaggerInfo from './users.swagger.json';
import { GetResult } from '@prisma/client/runtime';
import { UserEntity } from './entity/user.entity';

const endpoint = 'users';

@Controller(endpoint)
@ApiTags(endpoint)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user. Return user data with id.' })
  @ApiCreatedResponse({ type: UserEntity, description: 'The user has been successfully created.' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get('search/')
  @ApiOperation({ summary: 'Get user by email.' })
  @ApiOkResponse({ type: UserEntity, description: 'Search result by email.' })
  findOneByEmail(@Query('email') email?: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users.' })
  @ApiOkResponse({ type: [UserEntity], description: 'All users have been successfully received.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id.' })
  @ApiOkResponse({
    type: UserEntity,
    description: 'User with specific "id" has been successfully received.',
  })
  findOneById(@Param('id') id?: string) {
    return this.usersService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by id.' })
  @ApiBody({
    type: CreateUserDto,
  })
  @ApiOkResponse({ type: UserEntity, description: 'The user has been successfully updated.' })
  update(@Body() updateUserDto: Partial<UpdateUserDto>, @Param('id') id: string) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity, description: 'The user has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

// -------------------
// @ApiResponse({
// status: 200,
// schema: {
//   additionalProperties: {
//     name: 'john@mailcom',
//     password: '123456',
//   },
// },
// description: 'The found record',
// type: Object.assign({
//   email: 'john@mailcom',
//   password: '123456',
// }),
// })
// @ApiProperty({
//   type: Object,
//   description: JSON.stringify({
//     email: 'john@mailcom',
//     password: '123456',
//   }),
//   // minimum: 1,
//   // default: 1,
//   examples: {
//     email: 'john@mailcom',
//     password: '123456',
//   },
// })
// @ApiProperty({
//   example: {
//     email: 'john@mailcom',
//     password: '123456',
//   },
// })
// @ApiBody({
//   type: [CreateUserDto],
// })
// @ApiParam(Swagger.getInfo(swaggerInfo, 'create'))
