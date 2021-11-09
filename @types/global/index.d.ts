export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            readonly PORT: string;
            readonly HTTP_ACCESS_IP: string;
            readonly BINANCE_API_KEY: string;
            readonly BINANCE_API_SECRET_KEY: string;
        };
    };
};