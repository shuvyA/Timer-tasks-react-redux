// store

import { createStore, combineReducers  } from 'redux';
// import placeReducer from './reducers/placeReducer';
import tasks from './reducers/taskReducer';




const rootReducer = combineReducers({
  tasks: tasks
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;