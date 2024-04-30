import pool from '../lib/postgres';
const fetchDatabase = async () => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        client.release();
        return result.rows;
    } catch (error) {
        console.error("Error fetching data:",error);
        throw error;
    }
};
fetchDatabase()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });