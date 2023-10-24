declare const _default: (() => {
    database: {
        name: string;
        port: string;
    };
    mysql: {
        dbName: string;
        port: number;
        password: string;
        user: string;
        host: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        name: string;
        port: string;
    };
    mysql: {
        dbName: string;
        port: number;
        password: string;
        user: string;
        host: string;
    };
}>;
export default _default;
