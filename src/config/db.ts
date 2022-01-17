import * as dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const dbConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: isProd,
};

export const db = new Pool(dbConfig);
