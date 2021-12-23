import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {
  PORT,
  HOST, 
  HOST_URL, 
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;
