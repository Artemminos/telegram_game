declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_AUTH_TOKEN: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
            API_TOKEN: '1731671545:AAF3-VxGwVJ06GaQSuAS375tzOPlHyTO2Ys'
        }
    }
}

export {}