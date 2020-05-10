import { collatedTasks } from '../constants';

export const collatedTaskExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);