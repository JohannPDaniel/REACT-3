/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit';
import {
	persistReducer,
	persistStore,
	createTransform,
	Transform,
} from 'redux-persist';
import { rootReducer } from './modules/rootReducer';
import storage from 'redux-persist/lib/storage';

// Transformação para verificar a persistência baseada em "remember"
const persistTransform: Transform<any, any> = createTransform(
	(inboundState, key) => {
		// Persistir apenas se "remember" estiver true
		if (key === 'auth' && !inboundState.remember) {
			return { ...inboundState, isLogged: false }; // Resetar o login ao persistir
		}
		return inboundState; // Persistir normalmente
	},
	(outboundState) => outboundState // Sem alterações ao reidratar
);
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'], // Apenas o reducer auth será persistido
	transforms: [persistTransform], // Aplica a transformação
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
	persistConfig,
	rootReducer
);
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
