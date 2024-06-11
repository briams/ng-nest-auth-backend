import { IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  // @MinLength(6, {
  //   message: (validationArguments: ValidationArguments): string => {
  //     console.log('🚀 ~ validationArguments:', validationArguments);
  //     validationArguments.value;
  //     return `${validationArguments.value} no contiene ${validationArguments.constraints[0]} caracteres`;
  //   },
  // })
  @MinLength(6)
  password: string;
}
