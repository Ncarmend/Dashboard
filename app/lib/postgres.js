import { Pool } from 'pg';
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgresql',
    database: 'next-dashboard-postgres',
    port: 5432
});