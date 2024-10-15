import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/index';
import { UpdateWalletDto } from './dto/index';
import { Wallet } from './models/wallet.model';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  createWallet(@Body() createWalletDto: CreateWalletDto): Promise<Wallet> {
    return this.walletsService.createWallet(createWalletDto);
  }

  @Get()
  getAllWallets(): Promise<Wallet[]> {
    return this.walletsService.getAllWallets();
  }

  @Get(':id')
  getWalletById(@Param('id') id: number): Promise<Wallet> {
    return this.walletsService.getWalletById(id);
  }

  @Put(':id')
  updateWallet(
    @Param('id') id: number,
    @Body() updateWalletDto: UpdateWalletDto,
  ): Promise<Wallet> {
    return this.walletsService.updateWallet(id, updateWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.walletsService.remove(id);
  }
}
