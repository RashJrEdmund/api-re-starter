import { config } from "dotenv";
config();

const PORT = Number(process.env.PORT!);

const CRON_API = process.env.CRON_API!;

const CRON_TIME = process.env.CRON_TIME!;

export {
  PORT,
  CRON_TIME,
  CRON_API,
};
