## Welcome to my API re-starter application

- Table of context
  - [About](#about)
  - [Getting Started](#getting-started-for_developers)
  - [Adding new API](#adding-new-api-for_developers)
  - [Adjusting cron time](#adjusting-cron-time)

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
    server_name: string;
    api_url: string;
  }
```

### Adjusting cron time

- current cron - time is set to `"*/12 * * * *"` meaning `"every 12 mins"`
- To verify or adjust this interval, visit <https://crontab.guru/#>\*_**\***_\*
