import React, { EventHandler, Fragment, UIEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Month, numToMonth } from '../../utils/convert';
import './MainList.scss';
import MainListItem from './MainListItem/MainListItem';
import {
	activateIndex,
	selectActiveIndex,
	selectListItems,
	selectVisibleMonth,
	selectVisibleYear,
	setVisiblePeriod,
} from './store/mainListSlice';

const MainList: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const activeIndex = useAppSelector(selectActiveIndex);
	const listItems = useAppSelector(selectListItems);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (listItems.length) {
			const firstItem = listItems[0];
			dispatch(setVisiblePeriod({ month: numToMonth(firstItem.month) as Month, year: firstItem.year }));
		}
	}, [listItems]);

	const handleOnClick = (event: React.MouseEvent) => {
		const clickedIndex = (event.target as HTMLUListElement).getAttribute('data-index');
		if (clickedIndex) {
			dispatch(activateIndex(parseInt(clickedIndex)));
		}
	};

	return (
		<div className={`mainList__container ${activeIndex !== null ? 'no-scroll' : ''}`} ref={ref}>
			<ul className={`mainList ${activeIndex !== null ? 'expand' : 'default'}`} onClick={handleOnClick}>
				<div className="headerFillOut"></div>
				{listItems.map((item, i) => {
					let isYearBreak;
					let isMonthBreak;
					if (i === 0 || i === listItems.length - 1) {
						isYearBreak = false;
						isMonthBreak = false;
					} else {
						isYearBreak = item.year !== listItems[i - 1].year;
						isMonthBreak = item.month !== listItems[i - 1].month;
					}
					return (
						<MainListItem
							item={item}
							index={i}
							key={i}
							parentRef={ref}
							isMonthBreak={isMonthBreak}
							isYearBreak={isYearBreak}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default MainList;
