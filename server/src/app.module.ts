import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYS_HOST,
      port: Number(process.env.MYS_PORT),
      username: process.env.MYS_USER,
      password: process.env.MYS_ROOT_PASSWORD,
      database: process.env.MYS_DATABASE,
      entities: [],
      synchronize: false
    })
  ]
})
export class AppModule { }
