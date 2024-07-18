import { config } from "dotenv";

config();

const PORT = Number(process.env.PORT!)

export {
  PORT,
};
