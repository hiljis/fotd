import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../store/hooks';
import { selectActiveTab, Tab } from '../../../store/activeContentSlice';
import './TabSlide.scss';

type Props = {
	tab: Tab;
};

const TabSlide: React.FC<Props> = ({ tab }) => {
	const activeTab = useAppSelector(selectActiveTab);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (activeTab === tab) setVisible(true);
		else if (visible && activeTab === 'none') setVisible(true);
		else setVisible(false);
	}, [activeTab]);

	return <div className={`tabSlide tabSlide--${tab} ${visible ? 'visible' : ''}`}>{tab}</div>;
};

export default TabSlide;
