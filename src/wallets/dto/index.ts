export class CreateWalletDto {
    name: string;
    type: 'crypto' | 'fiat';
    userId: number;
  }
  
  export class UpdateWalletDto {
    name?: string;
    type?: 'crypto' | 'fiat';
  }
  