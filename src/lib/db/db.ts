import Database from 'better-sqlite3';

const db = new Database('src/lib/db/shop.db');
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

export default db;