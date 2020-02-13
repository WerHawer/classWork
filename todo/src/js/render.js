'use strict';

import refs from './refs';
import taskMarkup from '../markup/task.hbs';
import taskListMarkup from '../markup/taskList.hbs';

export const oneTaskRender = obj => {
  const markup = taskMarkup(obj);
  refs.output.insertAdjacentHTML('beforeend', markup);
};

export const TasksListRender = obj => {
  const markup = taskListMarkup(obj);
  refs.output.insertAdjacentHTML('beforeend', markup);
};
