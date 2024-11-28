import { IsNotEmpty, IsUUID, IsNumber, IsDateString } from 'class-validator';

export class CreatePayableDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  // @IsDateString()
  // @IsNotEmpty()
  // emissionDate: string;

  @IsUUID()
  @IsNotEmpty()
  assignorId: string;
}
