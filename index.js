import emoji from "node-emoji";
import chalk from "chalk";
import fetch from "node-fetch";

import LogTask from "./logTask.js";

const logTask = new LogTask("FetchUsers");

logTask.logStep(
  emoji.get("wrench"),
  "START",
  "preparing fetch users request url"
);

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((response) => response.json())
  .then((data) =>
    logTask.logStep(
      emoji.get("white_check_mark"),
      "END",
      chalk.green(`returned ${data.length} users`)
    )
  )
  .catch((error) =>
    logTask.logStep(
      emoji.get("x"),
      "END",
      chalk.red(`an error occurred while fetching the users. Error: ${error}`)
    )
  );
