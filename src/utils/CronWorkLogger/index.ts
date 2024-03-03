export enum NewsCronResults {
  START_CHECKING = "Start checking news at",
  FINISH_CHECKING = "Finish checking news at",
  START_DELETING = "Start deleting news at",
  FINISH_DELETING = "Finish deleting news at",
}

const cronWorkLogger = (definition: string): void => {
  console.log(`${definition} ${getCurrentDateTime()}`);
};

function getCurrentDateTime() {
  let date = new Date();
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  let milliseconds = String(date.getMilliseconds()).padStart(3, "0");

  return `${day}:${month}:${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

export { cronWorkLogger };
