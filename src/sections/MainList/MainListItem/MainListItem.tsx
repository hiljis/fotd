import { Fragment, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { numToWeekDay } from '../../../utils/convert';
import { ArtPost, selectActiveIndex } from '../store/mainListSlice';
import './MainListItem.scss';

type Props = {
	item: ArtPost;
	index: number;
	parentRef: React.RefObject<HTMLDivElement>;
};

const MainListItem: React.FC<Props> = ({ item, index, parentRef }) => {
	const activeIndex = useAppSelector(selectActiveIndex);
	const date = new Date(item.dateISO);
	const weekday = numToWeekDay(date.getDay())?.slice(0, 3);
	const monthDay = date.getDate().toString().padStart(2, '0');
	const ref = useRef<HTMLDivElement>(null);
	const [top, setTop] = useState(0);

	useEffect(() => {
		if (activeIndex === index && parentRef && parentRef.current) {
			console.log(parentRef.current?.scrollTop);
			setTop(parentRef.current!.scrollTop / 10);
		} else if (ref && ref.current) {
			console.log(ref.current?.offsetTop);
			setTop(ref.current?.offsetTop / 10);
		}
	}, [activeIndex]);

	return (
		<div ref={ref} className={`staticContainer ${activeIndex === index ? 'active' : ''}`}>
			<div
				className={`expandContainer ${activeIndex === index ? 'active' : ''}`}
				// style={{ top: `${index * 8}rem` }}
				style={{ top: `${top}rem` }}
			>
				<li
					className={`mainListItem ${activeIndex === index ? 'active' : 'inactive'}`}
					data-index={index}
					id={`item-${index}`}
				>
					<h1 className="mainListItem__name">{item.title}</h1>
					<div className="mainListItem__date">
						<span className="mainListItem__date--weekDay">{weekday}</span>
						<span className="mainListItem__date--monthDay">{monthDay}</span>
					</div>
				</li>
				<div className="expandContent"></div>
			</div>
		</div>
	);
};

export default MainListItem;
