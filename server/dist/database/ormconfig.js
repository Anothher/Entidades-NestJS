"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const configService = new config_1.ConfigService();
(0, dotenv_1.config)();
exports.default = new typeorm_1.DataSource({
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
//# sourceMappingURL=ormconfig.js.map