
import { ADD_NEW_TASK, PLAY_TASK, PAUSE_TASK, START_TIMER } from '../actions/types';

import { makeId } from '../util/util';

const initialState = {
  tasks: [],
  currTaskPlayId: null,
  interval: ''
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: state.tasks.concat({
          title: action.payload,
          seconds: 0,
          minutes: 0,
          id: makeId(7)
        })
      };
    case PAUSE_TASK:
      return {
        ...state,
        currTaskPlayId: null,
        interval: null 
      };
    case PLAY_TASK:
      return {
        ...state,
        currTaskPlayId: action.payload.taskId,
        interval: action.payload.interval 
      };
    case START_TIMER:
      return {
        ...state,
        currTaskPlayId:action.payload,
        tasks: state.tasks.map(task =>
          (task.id === action.payload) ?
            {
              ...task,
              seconds: task.seconds + 1
            } :
            task
        )
      };
    default:
      return state;
  }
}

export default taskReducer;