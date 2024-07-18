import { config } from "dotenv";
config();

const PORT = Number(process.env.PORT!);

const CRON_TIME = String(process.env.CRON_TIME!);

const CRON_API = String(process.env.CRON_API!);

export {
  PORT,
  CRON_TIME,
  CRON_API,
};
