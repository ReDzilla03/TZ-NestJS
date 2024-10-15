import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Wallet } from '../../wallets/models/wallet.model';

@Table
export class User extends Model<User> {
  @Column
  fullName: string;

  @Column
  phoneNumber: string;

  @Column
  email: string;

  @HasMany(() => Wallet)
  wallets: Wallet[];
}
