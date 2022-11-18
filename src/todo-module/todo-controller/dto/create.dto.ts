import { IsNotEmpty, MinLength, ValidationArguments ,MaxLength} from 'class-validator';
export class createDTO {
  @IsNotEmpty()
  @MinLength(10,{message:'taille minimum 10'})
  description: string; 
  
  
  @MinLength(3)
  @MaxLength(10)
  @IsNotEmpty({message:'vous devez entrer au moins un nom'})
  name:string ;
 
}
