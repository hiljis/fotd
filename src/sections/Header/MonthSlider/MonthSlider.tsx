import { useEffect, useState } from 'react';
import './MonthSlider.scss';

type Props = {
	month: string;
};
const MonthSlider: React.FC<Props> = ({ month }) => {
	const [currentMonth, setCurrentMonth] = useState<null | string>(null);

	useEffect(() => {
		setCurrentMonth(month);
	}, [month]);

	return (
		<div className="monthSlider">
			<h1 className="monthSlider__currentMonth">{currentMonth}</h1>
		</div>
	);
};

export default MonthSlider;
