type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

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
