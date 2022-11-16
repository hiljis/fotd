import { Fragment, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Month, numToMonth, numToWeekDay } from '../../../utils/convert';
import { ArtPost, selectActiveIndex, setVisiblePeriod } from '../store/mainListSlice';
import './MainListItem.scss';

type Props = {
	item: ArtPost;
	index: number;
	parentRef: React.RefObject<HTMLDivElement>;
	isMonthBreak: boolean;
	isYearBreak: boolean;
};

const MainListItem: React.FC<Props> = ({ item, index, parentRef, isMonthBreak, isYearBreak }) => {
	const activeIndex = useAppSelector(selectActiveIndex);
	const date = new Date(item.dateISO);
	const weekday = numToWeekDay(date.getDay())?.slice(0, 3);
	const monthDay = date.getDate().toString().padStart(2, '0');
	const ref = useRef<HTMLDivElement>(null);
	const [top, setTop] = useState(0);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const itemRef = ref.current;
		if (isYearBreak || isMonthBreak) {
			const options = {
				root: parentRef ? parentRef.current : null,
				rootMargin: '0px',
				threshold: 1,
			};

			const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					dispatch(
						setVisiblePeriod({ month: numToMonth(date.getMonth()) as Month, year: date.getFullYear() })
					);
				}
			}, options);

			if (itemRef) {
				observer.observe(itemRef);
				return () => {
					if (itemRef) observer.unobserve(itemRef);
				};
			}
		}
	}, []);

	useEffect(() => {
		if (activeIndex === index && parentRef && parentRef.current) {
			setTop(parentRef.current!.scrollTop / 10);
		} else if (ref && ref.current) {
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
