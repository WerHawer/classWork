'use strict';
import localStorage from './localStorage';
import { oneTaskRender, TasksListRender } from './render';
import toDo from './tasks';
import refs from './refs';
import { createId, cleanArea, clearInput } from './utils';

refs.form.addEventListener('click', addTask);
refs.output.addEventListener('click', doneTask);
refs.output.addEventListener('click', deleteTask);

start('tasksLS');

function start(key) {
  const tasksLs = localStorage.load(key);
  const objTask = {};

  if (tasksLs) {
    toDo.tasks = tasksLs;
    objTask.tasks = tasksLs;
  }

  TasksListRender(objTask);
}

function addTask(e) {
  e.preventDefault();

  if (e.target.dataset.action !== 'addTask') return;

  if (!toDo.tasks.length) {
    cleanArea(refs.output);
  }

  const title = refs.inputName.value;
  const text = refs.inputText.value;

  const taskObj = { title, text, id: createId(), done: false };

  toDo.addTask(taskObj);
  oneTaskRender(taskObj);

  clearInput(refs.inputName);
  clearInput(refs.inputText);

  localStorage.save('tasksLS', toDo.tasks);
}

function doneTask(e) {
  if (e.target.dataset.action !== 'done') return;

  const card = e.target.closest('li');
  const targetId = card.dataset.id;

  toDo.doneTask(targetId);

  card.classList.add('todo-element--done');
  localStorage.save('tasksLS', toDo.tasks);
  return;
}

function deleteTask(e) {
  if (e.target.dataset.action !== 'delete') return;

  const card = e.target.closest('li');
  const targetId = card.dataset.id;

  toDo.deleteTask(targetId);
  card.remove();
  localStorage.save('tasksLS', toDo.tasks);

  if (!toDo.tasks.length) {
    TasksListRender();
  }
}
