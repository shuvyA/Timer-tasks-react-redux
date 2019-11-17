
import { createStore, combineReducers  } from 'redux';
import tasks from './reducers/taskReducer';



const rootReducer = combineReducers({
  tasks: tasks
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;