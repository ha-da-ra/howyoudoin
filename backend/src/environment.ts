import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000

export const DB_PATH = process.env.DB_PATH || "/database.db";
