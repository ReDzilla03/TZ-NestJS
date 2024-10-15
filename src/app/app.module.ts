import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { WalletsModule } from '../wallets/wallets.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configurations from 'src/configurations';
import { User } from '../users/models/user.model';
import { Wallet } from '../wallets/models/wallet.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbHost = configService.get<string>('db_host');
        const dbPort = configService.get<number>('db_port');
        const dbUser = configService.get<string>('db_user');
        const dbPassword = configService.get<string>('db_password');
        const dbName = configService.get<string>('db_name');

        if (!dbHost || !dbUser || !dbPassword || !dbName) {
          throw new Error('Database configuration is incomplete.');
        }

        return {
          dialect: 'postgres',
          host: dbHost,
          port: dbPort,
          username: dbUser,
          password: dbPassword,
          database: dbName,
          synchronize: true,
          autoLoadModels: true,
          models: [User, Wallet],
        };
      },
    }),
    UsersModule,
    WalletsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
