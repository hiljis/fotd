import React, { EventHandler, Fragment, UIEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './MainList.scss';
import MainListItem from './MainListItem/MainListItem';
import { activateIndex, selectActiveIndex, selectListItems } from './store/mainListSlice';

const MainList: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const activeIndex = useAppSelector(selectActiveIndex);
	const listItems = useAppSelector(selectListItems);
	const dispatch = useAppDispatch();

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
					return <MainListItem item={item} index={i} key={i} parentRef={ref} />;
				})}
			</ul>
		</div>
	);
};

export default MainList;
