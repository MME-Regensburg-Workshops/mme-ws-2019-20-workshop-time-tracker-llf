import Task from "./Task.js";

class TaskList {

  constructor() {
    this.taskList = [];
    this.updateTime = 1000;
  }

  newTask(description,labels) {
    var newTask = new Task(this.taskList.length,description,labels,this.updateTime);
    this.taskList.push(newTask);
  }

  getActiveTask() {
    var activeTask;
    if (this.taskList[this.taskList.length-1].active) {
      activeTask = this.taskList[this.taskList.length-1];
    }
    return activeTask;
  }

  updateTime(id) {
    this.taskList[id].updateTime();
  }

  pauseTask(id) {
    this.taskList[id].pauseTask();
  }

  stopTask(id) {
    this.taskList[id].stopTask();
  }

  filterTaskList(labels) {
    //var filteredTasks = [];
    //foreach () {
    //  if ( == label[1]) {
    //    filteredTasks.push();
    //  }
    //}
    //return filteredTasks;
  }

  unshownTasksLength(filteredTasksLength) {
    return this.taskList.length - filteredTasksLength;
  }

  sumOfTaskTime(tasks) {
    //var timeSum;
    //foreach() {
    // timeSum += tasks[i].runningTime;
    //}
  }

}

export default TaskList;
