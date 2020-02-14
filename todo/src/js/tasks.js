export default {
  tasks: [],

  addTask(obj) {
    this.tasks = [...this.tasks, obj];
  },

  deleteTask(targetId) {
    this.tasks = this.tasks.filter(({ id }) => id !== Number(targetId));
  },

  doneTask(targetId) {
    this.tasks = this.tasks.map(task =>
      task.id === Number(targetId) ? { ...task, done: true } : task,
    );
  },
};
