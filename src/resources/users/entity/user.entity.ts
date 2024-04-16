import { User } from '@prisma/client';
import { IsEmail, IsNumber, IsString, Min } from 'class-validator';

export class UserEntity implements User {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @Min(6)
  @IsString()
  password: string;
}
