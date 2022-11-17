import { useAppSelector } from '../../../../../store/hooks';
import { selectActiveTab, Tab } from '../../ExpandContent/store/activeContentSlice';
import './TabSlide.scss';

type Props = {
	tab: Tab;
};

const TabSlide: React.FC<Props> = ({ tab }) => {
    const activeTab = useAppSelector(selectActiveTab);
	return <div className={`tabSlide tabSlide--${tab} ${activeTab === tab ? 'active' : ''}`}>{tab}</div>;
};

export default TabSlide;
