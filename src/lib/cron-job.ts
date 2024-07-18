import cronData from "../../public/cron-data.json";
import custom_logger from "./custom-logger";

interface CronData {
  name: string;
  "api-url": string;
};

const cronFunction = () => {
  console.log("in function");

  (cronData as CronData[]).forEach(async (data) => {
    await fetch(data["api-url"])
      .then(() => {
        custom_logger(data.name, "SUCCESS, SERVER RESTARTED");
      })
      .catch(() => {
        custom_logger(data.name, "SOMETHING WENT WRONG", { type: "warn" });
      })
      .finally(() => {
        console.log("Moving On")
      });
  });
};

export {
  cronFunction,
};
