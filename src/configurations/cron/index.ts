export const CronConfig = {
  news: {
    limit: 500,
    check: {
      id: "check news",
      minutes: 20,
    },
    delete: {
      id: "delete news",
      hours: 4,
    },
  },
};
