export class CreateUserDto {
    fullName: string;
    phoneNumber: string;
    email: string;
  }
  
  export class UpdateUserDto {
    fullName?: string;
    phoneNumber?: string;
    email?: string;
  }
  