import {
  ADD_NEW_TASK,
  PLAY_TASK,
  PAUSE_TASK,
  START_TIMER
} from './types';

export const addNewTask = taskName => {
  return {
    type: ADD_NEW_TASK,
    payload: taskName
  }
}

export const playTask = taskId => {
  return {
    type: PLAY_TASK,
    payload: taskId
  }
}
export const startTimer = idAndIntervalObj => {
  return {
    type: START_TIMER,
    payload: idAndIntervalObj
  }
}
export const pauseTask = () => {
  return {
    type: PAUSE_TASK,
  }
}




