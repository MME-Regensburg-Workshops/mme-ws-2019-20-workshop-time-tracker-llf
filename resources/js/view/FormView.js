import {Event,Observable} from "../utils/Observer.js";

class FormView extends Observable {

  showForm() {
    //document.getElementById("").classList.remove("hidden");
  }

  hideForm() {
    //document.getElementById("").classList.add("hidden");
  }

  getInfo() {
    var descr = document.querySelector("task-description").value,
        labels = this.splitLabels(document.querySelector("task-labels").value);
  }

  splitLabels(text) {
    return text.split(",");
  }

}

export default FormView;
