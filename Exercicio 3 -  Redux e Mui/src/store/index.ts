import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './modules/rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import  storage  from 'redux-persist/lib/storage';


const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST'],
				ignoredPaths: ['register'],
			},
		}),
});


export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
