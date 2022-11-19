import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store/store';

export type Tab = 'info' | 'creator' | 'nft' | 'vote' | 'comment' | 'none' | 'score';

export interface ActiveContentState {
	activeTab: Tab;
	hasLikedImage: boolean;
	hasVoted: boolean;
	status: 'idle' | 'loading' | 'failed' | 'success';
	error: string;
}

const initialState: ActiveContentState = {
	activeTab: 'none',
	hasLikedImage: false,
	hasVoted: true,
	status: 'idle',
	error: '',
};

export const activeContentSlice = createSlice({
	name: 'activeContent',
	initialState,
	reducers: {
		setActiveTab: (state, action: PayloadAction<Tab>) => {
			state.activeTab = action.payload;
		},
		setHasLikedImage: (state, action: PayloadAction<boolean>) => {
			state.hasLikedImage = action.payload;
		},
		setHasVoted: (state, action: PayloadAction<boolean>) => {
			state.hasVoted = action.payload;
		},
	},
});

export const { setActiveTab, setHasLikedImage, setHasVoted } = activeContentSlice.actions;

export const selectActiveTab = (state: RootState) => state.activeContent.activeTab;
export const selectHasLikedImage = (state: RootState) => state.activeContent.hasLikedImage;
export const selectHasVoted = (state: RootState) => state.activeContent.hasVoted;

export default activeContentSlice.reducer;
