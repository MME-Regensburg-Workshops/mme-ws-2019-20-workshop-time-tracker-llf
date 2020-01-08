class Task {

  constructor(id,description,labels,updateTime) {
    this.id = id;
    this.description = description;
    this.labels = labels;
    this.runningTime = 0;
    this.active = true;
    this.startTime = Date.now();
    this.updateTime = updateTime;
    this.updateTime();
  }

  getRunningTime() {
    var curTime = Date.now();
    this.runningTime = curTime - this.startTime;
  }

  updateTime() {
    this.timer = setInterval(this.getRunningTime, this.updateTime);
  }

  pauseTask() {
    clearInterval(this.timer);
  }

  stopTask() {
    clearInterval(this.timer);
  }

}

export default Task;
