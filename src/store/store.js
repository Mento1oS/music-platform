import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './slices/playerSlice';
import dropoutStatusReducer from './slices/dropoutStatusSlice';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';
import { favoritesApi } from './middlewares/favorites';
export default configureStore({
  reducer: {
    player: playerReducer,
    dropoutStatus: dropoutStatusReducer,
    theme: themeReducer,
    user: userReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(favoritesApi.middleware)
});
