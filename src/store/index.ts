import { configureStore } from '@reduxjs/toolkit';

// Emit the actions that the flow is in an async way
import reduxThunk from 'redux-thunk';

// Set reducers
import rootReducers from './reducers';

//Set Middleware
const middleware = [reduxThunk];

// Set store
const store = configureStore({
  reducer: rootReducers,
  middleware: middleware,
});

export default store;
