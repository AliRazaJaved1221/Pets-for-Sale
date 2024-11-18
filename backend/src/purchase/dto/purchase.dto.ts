// purchase.dto.ts
import { IsString, IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';

export class PurchaseDto {
  // Buyer Details
  @IsString()
  @IsNotEmpty()
  buyerFirstName: string;

  @IsString()
  buyerLastName: string;

  @IsEmail()
  @IsNotEmpty()
  buyerEmail: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsString()
  @IsNotEmpty()
  delivery: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  // Pet Details
  @IsString()
  @IsNotEmpty()
  petName: string;
  
  @IsString()
  @IsNotEmpty()
  petBreed: string;

  @IsString()
  @IsNotEmpty()
  petColor: string;

  @IsString()
  @IsNotEmpty()
  petAge: string;

  @IsString()
  @IsNotEmpty()
  petPrice: string;

  @IsString()
  @IsNotEmpty()
  petDescription: string;

  @IsString()
  @IsNotEmpty()
  petOwnerEmail: string;

  @IsString()
  @IsNotEmpty()
  petOwnerName: string;

  @IsString()
  @IsNotEmpty()
  petImage: string;

}
