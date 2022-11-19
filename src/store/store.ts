import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mainListReducer from '../sections/MainList/store/mainListSlice';
import activeContentReducer from '../sections/MainList/store/activeContentSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		mainList: mainListReducer,
		activeContent: activeContentReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
