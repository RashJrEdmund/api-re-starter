## Welcome to my API re-starter application

### About

- This is a cron job application that constantly hits my online APIs to make sure the remain alive

### Getting started [For_Developers]

- Clone repo with

    ```bash
      git clone git@github.com:RashJrEdmund/api-re-starter.git
    ```

- Navigate to project with

    ```bash
      cd api-re-starter
    ```

- Install packages and start server

    ```bash
      npm install # or npm i
      npm run dev
    ```

### Adding new API [For_Developers]

- Navigate to `/public/cron-data.json` and add the new API, following the same format as the others

```bash
  interface CronData {
    name: string;
    "api-url": string;
  }
```
