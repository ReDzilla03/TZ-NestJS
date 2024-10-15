import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from '../../users/models/user.model';

@Table
export class Wallet extends Model<Wallet> {
  @Column
  name: string;

  @Column
  type: 'crypto' | 'fiat';

  @ForeignKey(() => User)
  @Column
  userId: number;
}
