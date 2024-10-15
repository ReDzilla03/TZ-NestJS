import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Wallet } from './models/wallet.model';
import { CreateWalletDto } from './dto/index';
import { UpdateWalletDto } from './dto/index';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet)
    private walletModel: typeof Wallet,  // Используем модель Wallet как репозиторий
  ) {}

  // Метод для создания нового кошелька
  async createWallet(createWalletDto: CreateWalletDto): Promise<Wallet> {
    return this.walletModel.create(createWalletDto);
  }

  // Метод для получения всех кошельков
  async getAllWallets(): Promise<Wallet[]> {
    return this.walletModel.findAll();
  }

  // Метод для получения кошелька по ID
  async getWalletById(id: number): Promise<Wallet> {
    return this.walletModel.findOne({
      where: { id },
    });
  }

  // Метод для обновления кошелька по ID
  async updateWallet(id: number, updateWalletDto: UpdateWalletDto): Promise<Wallet> {
    const [_, [updatedWallet]] = await this.walletModel.update(updateWalletDto, {
      where: { id },
      returning: true,
    });

    return updatedWallet; // Возвращаем только обновлённый объект
  }

  // Метод для удаления кошелька по ID
  async remove(id: number): Promise<void> {
    const wallet = await this.getWalletById(id);
    if (wallet) {
      await wallet.destroy();
    }
  }
}
