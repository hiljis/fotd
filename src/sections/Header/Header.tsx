import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectActiveIndex } from '../MainList/store/mainListSlice';
import './Header.scss';
import MonthSlider from './MonthSlider/MonthSlider';

type Props = {};
const Header: React.FC<Props> = ({}) => {
	const activeIndex = useAppSelector(selectActiveIndex);
	const [year, setYear] = useState(2022);
	return (
		<header className={`header ${activeIndex !== null ? 'collapse' : 'expand'}`}>
			<div className="header__content">
				<div className="header--left">
					<h3 className="fotd__textLogo">FOTD</h3>
				</div>
				<div className="header--right">
					<h3 className="header__year">{year}</h3>
					<MonthSlider month="November" />
				</div>
			</div>
		</header>
	);
};

export default Header;
