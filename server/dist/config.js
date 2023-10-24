"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
        },
        mysql: {
            dbName: process.env.MYSQL_DATABASE,
            port: parseInt(process.env.MYSQL_PORT, 10),
            password: process.env.MYSQL_ROOT_PASSWORD,
            user: process.env.MYSQL_USER,
            host: process.env.MYSQL_HOST,
        }
    };
});
//# sourceMappingURL=config.js.map