import dateFormat from "date-format";

class LogTask {
  constructor(name) {
    this.name = name;
  }

  logStep(emoji, step, description) {
    console.log(
      `[${dateFormat(new Date(), "dd-mm-yyyy H:MM:ss")}] - ${emoji} ${
        this.name
      } ${step} ${description}`
    );
  }
}

export default LogTask;
