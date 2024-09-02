import { IsString, IsDate, IsNotEmpty } from "class-validator";

export class CreatePUCDto {
  @IsString()
  @IsNotEmpty()
  vehicleNumber: string;

  @IsString()
  @IsNotEmpty()
  vehicleType: string;

  @IsDate()
  @IsNotEmpty()
  issueDate: string;

  @IsDate()
  @IsNotEmpty()
  expirationDate: string;
}
