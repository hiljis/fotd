import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store/store';
import { Month } from '../../../utils/convert';
import { testData } from './testData';

export interface ArtPost {
	name: string;
	title: string;
	year: number;
	month: number;
	monthDay: number;
	dateISO: string;
	imageUrl: string;
	id: number;
}

export interface MainListState {
	activeIndex: number | null;
	items: ArtPost[];
	visibleMonth: Month;
	visibleYear: number;
	status: 'idle' | 'loading' | 'failed' | 'success';
	error: string;
}

const initialState: MainListState = {
	activeIndex: null,
	items: testData,
	visibleMonth: 'november',
	visibleYear: 2022,
	status: 'idle',
	error: '',
};

export const mainListSlice = createSlice({
	name: 'mainList',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		getArtPostsStart: (state) => {
			state.status = 'loading';
		},
		getArtPostsSuccess: (state, action: PayloadAction<ArtPost[]>) => {
			state.items = action.payload;
			state.status = 'success';
		},
		getArtPostsFail: (state, action: PayloadAction<string>) => {
			state.status = 'failed';
			state.error = action.payload;
		},
		activateIndex: (state, action: PayloadAction<number>) => {
			const index = action.payload;

			state.activeIndex = state.activeIndex === index ? null : index;
		},
		inactivate: (state) => {
			state.activeIndex = -1;
		},
		setVisiblePeriod: (state, action: PayloadAction<{ month: Month; year: number }>) => {
			const { month, year } = action.payload;
			state.visibleMonth = month;
			state.visibleYear = year;
		},
	},
});

export const { getArtPostsStart, getArtPostsSuccess, getArtPostsFail, activateIndex, inactivate, setVisiblePeriod } =
	mainListSlice.actions;

export const selectListItems = (state: RootState) => state.mainList.items;
export const selectActiveIndex = (state: RootState) => state.mainList.activeIndex;
export const selectVisibleMonth = (state: RootState) => state.mainList.visibleMonth;
export const selectVisibleYear = (state: RootState) => state.mainList.visibleYear;

export default mainListSlice.reducer;
