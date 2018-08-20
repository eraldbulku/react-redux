import { combineReducers } from 'redux';
import { reduce as formReducer } from 'redux-form'; 
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
	posts: PostsReducer,
	form: formReducer
});

export default rootReducer;
