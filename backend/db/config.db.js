import { Pool } from 'pg';

const pool = new Pool({
    connectionString: "postgresql://postgres:2121@localhost:5432/kpbi"
});

export { pool }