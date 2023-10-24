import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

const configService = new ConfigService();
config();

export default new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: process.env.MYS_HOST,
  port: Number(process.env.MYS_PORT),
  username: process.env.MYS_USER,
  password: process.env.MYS_ROOT_PASSWORD,
  database: process.env.MYS_DATABASE,
  logging: true,
  synchronize: false,
  name: 'default',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
