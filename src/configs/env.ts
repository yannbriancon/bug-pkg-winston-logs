type Env = { NODE_ENV: string; PORT: number; WS_HOST: string; WS_PORT: number }
const env: Env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: Number(process.env.PORT) || 8080,
    WS_HOST: process.env.WS_HOST || '127.0.0.1',
    WS_PORT: Number(process.env.WS_PORT) || 11120
}

export default env
