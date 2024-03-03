import { ToadScheduler, SimpleIntervalJob, Task } from "toad-scheduler";
import { NewsControllers } from "@controllers";
import { CronConfig } from "@configurations";

const scheduler = new ToadScheduler();

// news
const checkNewsTask = new Task(CronConfig.news.check.id, () =>
  NewsControllers.checkNews(),
);
const checkNewsJob = new SimpleIntervalJob(
  { minutes: CronConfig.news.check.minutes },
  checkNewsTask,
);

const deleteNewsTask = new Task(CronConfig.news.delete.id, () =>
  NewsControllers.deleteNews(),
);
const deleteNewsJob = new SimpleIntervalJob(
  { hours: CronConfig.news.delete.hours },
  deleteNewsTask,
);

const initCronWork = () => {
  scheduler.addSimpleIntervalJob(checkNewsJob);
  scheduler.addSimpleIntervalJob(deleteNewsJob);

  console.log("initialize cron work is complete");
};

export { initCronWork };
