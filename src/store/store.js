import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './slices/playerSlice';
import dropoutStatusReducer from './slices/dropoutStatusSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';
export default configureStore({
  reducer: {
    player: playerReducer,
    dropoutStatus: dropoutStatusReducer,
    theme: themeReducer,
    user: userReducer
  },
});
