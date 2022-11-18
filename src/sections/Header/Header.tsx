import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectActiveIndex, selectVisibleMonth, selectVisibleYear } from '../MainList/store/mainListSlice';
import MonthSlider from './MonthSlider/MonthSlider';
import { ReactComponent as IconLogoF } from '../../assets/icons/IconLogoF.svg';
import './Header.scss';

type Props = {};
const Header: React.FC<Props> = ({}) => {
	const activeIndex = useAppSelector(selectActiveIndex);
	const visibleYear = useAppSelector(selectVisibleYear);
	const visibleMonth = useAppSelector(selectVisibleMonth);

	return (
		<header className={`header ${activeIndex !== null ? 'collapse' : 'expand'}`}>
			<div className="header__content">
				<div className="header__content--left">
					<div className="logoBox">
						<IconLogoF className="icon--md" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
