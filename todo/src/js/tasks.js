export default {
  tasks: [],

  add(obj) {
    this.tasks = [...this.tasks, obj];
  },

  delete(targetId) {
    this.tasks = this.tasks.filter(({ id }) => id !== Number(targetId));
  },

  done(targetId) {
    this.tasks = this.tasks.filter(task =>
      task.id === Number(targetId) ? (task.done = true) : task,
    );
  },
};
