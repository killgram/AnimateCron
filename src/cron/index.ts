import { ToadScheduler, SimpleIntervalJob, Task } from "toad-scheduler";
import { NewsControllers } from "@controllers";
import { CronConfig } from "@configurations";

const scheduler = new ToadScheduler();

// news
const checkNewsTask = new Task(CronConfig.news.id, () =>
  NewsControllers.checkNews(),
);
const checkNewsJob = new SimpleIntervalJob(
  { minutes: CronConfig.news.minutes },
  checkNewsTask,
);

const initCronWork = () => {
  scheduler.addSimpleIntervalJob(checkNewsJob);

  console.log("initialize cron work is complete");
};

export { initCronWork };
