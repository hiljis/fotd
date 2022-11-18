import { Fragment, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Month, numToMonth, numToWeekDay } from '../../../utils/convert';
import { ArtPost, selectActiveIndex, setVisiblePeriod } from '../store/mainListSlice';
import DisplayImage from './DisplayImage/DisplayImage';
import ExpandContent from './ExpandContent/ExpandContent';
import './MainListItem.scss';
import NavBar from './NavBar/NavBar';

type Props = {
	item: ArtPost;
	index: number;
	parentRef: React.RefObject<HTMLDivElement>;
	isYearBreak: boolean;
	isMonthBreak: boolean;
};

const MainListItem: React.FC<Props> = ({ item, index, parentRef, isYearBreak, isMonthBreak }) => {
	const activeIndex = useAppSelector(selectActiveIndex);
	const date = new Date(item.dateISO);
	const weekday = numToWeekDay(date.getDay())?.slice(0, 3);
	const monthDay = date.getDate().toString().padStart(2, '0');
	const ref = useRef<HTMLDivElement>(null);
	const [top, setTop] = useState(0);

	useEffect(() => {
		if (ref && ref.current) {
			if (isYearBreak || isMonthBreak) {
				setTop(ref.current?.offsetTop / 10);
			} else {
				setTop(ref.current?.offsetTop / 10);
			}
		}
	}, []);

	useEffect(() => {
		if (activeIndex === index && parentRef && parentRef.current) {
			setTop(parentRef.current!.scrollTop / 10);
		} else if (ref && ref.current) {
			if (isYearBreak || isMonthBreak) {
				setTop(ref.current?.offsetTop / 10);
			} else {
				setTop(ref.current?.offsetTop / 10);
			}
		}
	}, [activeIndex]);

	return (
		<Fragment>
			{isYearBreak || isMonthBreak ? (
				<time className="mainListHeader" dateTime={`${item.year}-${item.month}`}>
					<span>{item.year}</span>
					<span>{numToMonth(item.month)}</span>
				</time>
			) : (
				''
			)}
			<div ref={ref} className={`staticContainer ${activeIndex === index ? 'active' : ''}`}>
				<div
					className={`expandContainer ${activeIndex === index ? 'active' : ''}`}
					style={{ top: `${top}rem` }}
				>
					<li
						className={`mainListItem ${activeIndex === index ? 'active' : 'inactive'}`}
						data-index={index}
						id={`item-${index}`}
					>
						<h1 className="mainListItem__name">{item.name}</h1>
						<div className="mainListItem__date">
							<span className="mainListItem__date--weekDay">{weekday}</span>
							<span className="mainListItem__date--monthDay">{monthDay}</span>
						</div>
					</li>
					<ExpandContent />
				</div>
			</div>
		</Fragment>
	);
};

export default MainListItem;
