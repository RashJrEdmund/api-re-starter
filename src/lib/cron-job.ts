import { CRON_API } from "../config";
import cronData from "../../public/cron-data.json";
import custom_logger from "./custom-logger";

interface CronData {
  server_name: string;
  api_url: string;
};

const getCronData = () => {
  const cron_api: CronData = {
    server_name: "Cron Job",
    api_url: CRON_API,
  };

  return [
    cron_api,
    ...cronData,
  ];
};

const cronFunction = async () => {
  console.log("JOB - STARTED");

  await new Promise((resolve) => {
    getCronData().forEach(async ({ server_name, api_url }, i, arr) => {
      await fetch(api_url)
        .then(() => {
          custom_logger(server_name, "SUCCESS, SERVER RESTARTED");
        })
        .catch(() => {
          custom_logger(server_name, "SOMETHING WENT WRONG", { type: "warn" });
        })
        .finally(() => {
          if (i === arr.length - 1) {
            return resolve("JOB DONE\n");
          };

          console.log("Moving On");
        });
    });
  })
    .then(console.log);
};

export {
  cronFunction,
};
