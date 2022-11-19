import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectActiveTab, Tab } from '../../store/activeContentSlice';
import ContentComment from './Content/ContentComment/ContentComment';
import ContentCreator from './Content/ContentCreator/ContentCreator';
import ContentInfo from './Content/ContentInfo/ContentInfo';
import ContentNft from './Content/ContentNft/ContentNft';
import ContentScore from './Content/ContentScore/ContentScore';
import './TabContent.scss';

const TabContent: React.FC = () => {
	const activeTab = useAppSelector(selectActiveTab);
	const [visibleTab, setVisibleTab] = useState<Tab>('none');

	useEffect(() => {
		if (activeTab !== 'none') {
			setVisibleTab(activeTab);
		}
	}, [activeTab]);

	return (
		<div className={`tabContent ${activeTab} ${activeTab !== 'none' && 'active'}`}>
			{visibleTab === 'info' ? <ContentInfo /> : ''}
			{visibleTab === 'creator' ? <ContentCreator /> : ''}
			{visibleTab === 'nft' ? <ContentNft /> : ''}
			{visibleTab === 'score' ? <ContentScore /> : ''}
			{visibleTab === 'comment' ? <ContentComment /> : ''}
		</div>
	);
};

export default TabContent;
