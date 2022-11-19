import { Fragment, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { numToMonth, numToWeekDay } from '../../../utils/convert';
import { ArtPost, selectActiveIndex } from '../store/mainListSlice';
import ExpandContent from './ExpandContent/ExpandContent';
import './MainListItem.scss';

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
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (ref && ref.current) {
			setTop(ref.current.offsetTop);
		}
	}, []);

	useEffect(() => {
		const handleOnResize = () => {
			setDimensions({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', handleOnResize);

		return () => {
			window.removeEventListener('resize', handleOnResize);
		};
	}, []);

	useEffect(() => {
		if (activeIndex === index && parentRef && parentRef.current) {
			setTop(parentRef.current.scrollTop);
		} else if (ref && ref.current) {
			setTop(ref.current.offsetTop);
		}
	}, [activeIndex, dimensions, index, parentRef]);

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
				<div className={`expandContainer ${activeIndex === index ? 'active' : ''}`} style={{ top: `${top}px` }}>
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
					{activeIndex === index ? <ExpandContent /> : ''}
				</div>
			</div>
		</Fragment>
	);
};

export default MainListItem;
