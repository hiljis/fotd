import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store/store';

type month =
	| 'January'
	| 'February'
	| 'March'
	| 'April'
	| 'May'
	| 'June'
	| 'July'
	| 'August'
	| 'September'
	| 'October'
	| 'November'
	| 'December';

export interface ArtPost {
	title: string;
	dateISO: string;
	imageUrl: string;
	id: number;
}

export interface MainListState {
	activeIndex: number | null;
	items: ArtPost[];
	visibleTopMonth: month;
	visibleBottomMonth: month;
	status: 'idle' | 'loading' | 'failed' | 'success';
	error: string;
}

const artPosts = [
	{ title: 'Alyssa Carson', imageUrl: '', dateISO: new Date('November 1, 2022').toISOString(), id: 1 },
	{ title: 'Brian Armstrong', imageUrl: '', dateISO: new Date('November 2, 2022').toISOString(), id: 2 },
	{ title: 'Michael Saylor', imageUrl: '', dateISO: new Date('November 3, 2022').toISOString(), id: 3 },
	{ title: 'Rihanna', imageUrl: '', dateISO: new Date('November 4, 2022').toISOString(), id: 4 },
	{ title: 'Elon Musk', imageUrl: '', dateISO: new Date('November 5, 2022').toISOString(), id: 5 },
	{ title: 'Robyn', imageUrl: '', dateISO: new Date('November 6, 2022').toISOString(), id: 6 },
	{ title: 'Henric Hiljanen', imageUrl: '', dateISO: new Date('November 7, 2022').toISOString(), id: 7 },
	{ title: 'Maja Gerhardsson', imageUrl: '', dateISO: new Date('November 8, 2022').toISOString(), id: 8 },
	{ title: 'Gary Vee', imageUrl: '', dateISO: new Date('November 9, 2022').toISOString(), id: 9 },
	{ title: 'Lady Gaga', imageUrl: '', dateISO: new Date('November 10, 2022').toISOString(), id: 10 },
	{ title: 'Vitalik Buterin', imageUrl: '', dateISO: new Date('November 11, 2022').toISOString(), id: 11 },
	{ title: 'Avicii', imageUrl: '', dateISO: new Date('November 12, 2022').toISOString(), id: 12 },
];

const initialState: MainListState = {
	activeIndex: null,
	items: artPosts,
	visibleTopMonth: 'January',
	visibleBottomMonth: 'February',
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
	},
});

export const { getArtPostsStart, getArtPostsSuccess, getArtPostsFail, activateIndex, inactivate } =
	mainListSlice.actions;

export const selectListItems = (state: RootState) => state.mainList.items;
export const selectActiveIndex = (state: RootState) => state.mainList.activeIndex;

export default mainListSlice.reducer;
