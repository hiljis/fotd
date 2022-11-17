import { useAppSelector } from '../../../../store/hooks';
import { selectActiveTab } from '../ExpandContent/store/activeContentSlice';
import './TabContentBox.scss';
import TabSlide from './TabSlide/TabSlide';

const TabContent: React.FC = () => {
	const activeTab = useAppSelector(selectActiveTab);

	return (
		<div className={`tabContentBox ${activeTab !== 'none' && 'active'}`}>
			<TabSlide tab={'info'} />
			<TabSlide tab={'creator'} />
			<TabSlide tab={'nft'} />
			<TabSlide tab={'vote'} />
			<TabSlide tab={'comment'} />
		</div>
	);
};

export default TabContent;
