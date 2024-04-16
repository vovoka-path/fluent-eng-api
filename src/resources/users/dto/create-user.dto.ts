import { IsEmail, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Min(6)
  @IsString()
  password: string;
}
