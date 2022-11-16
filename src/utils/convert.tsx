export type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
export type Month =
	| 'january'
	| 'february'
	| 'march'
	| 'april'
	| 'may'
	| 'june'
	| 'july'
	| 'august'
	| 'september'
	| 'october'
	| 'november'
	| 'december';

export const numToWeekDay = (num: number): Weekday | '' => {
	switch (num) {
		case 0:
			return 'monday';
		case 1:
			return 'tuesday';
		case 2:
			return 'wednesday';
		case 3:
			return 'thursday';
		case 4:
			return 'friday';
		case 5:
			return 'saturday';
		case 6:
			return 'sunday';
		default:
			return '';
	}
};

export const numToMonth = (num: number): Month | '' => {
	switch (num) {
		case 0:
			return 'january';
		case 1:
			return 'february';
		case 2:
			return 'march';
		case 3:
			return 'april';
		case 4:
			return 'may';
		case 5:
			return 'june';
		case 6:
			return 'july';
		case 7:
			return 'august';
		case 8:
			return 'september';
		case 9:
			return 'october';
		case 10:
			return 'november';
		case 11:
			return 'december';
		default:
			return '';
	}
};
