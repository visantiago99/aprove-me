import { IsNotEmpty, IsUUID, IsEmail, Length } from 'class-validator';

export class CreateAssignorDto {
  @Length(1, 30)
  @IsNotEmpty()
  document: string;

  @IsEmail()
  @Length(1, 140)
  @IsNotEmpty()
  email: string;

  @Length(1, 20)
  @IsNotEmpty()
  phone: string;

  @Length(1, 140)
  @IsNotEmpty()
  name: string;
}
