import DisplayImage from '../DisplayImage/DisplayImage';
import Tabs from '../Tabs/Tabs';
import TabContent from '../TabContent/TabContent';
import './ExpandContent.scss';
import { useAppSelector } from '../../../../store/hooks';
import { selectActiveTab, selectHasVoted } from '../../store/activeContentSlice';
import VoteBtn from '../../../../components/VoteBtn/VoteBtn';
import CommentForm from '../../../../components/CommentForm/CommentForm';
import VoteForm from '../../../../components/VoteForm/VoteForm';

const ExpandContent: React.FC = () => {
	const activeTab = useAppSelector(selectActiveTab);
	const hasVoted = useAppSelector(selectHasVoted);
	return (
		<div className="expandContent">
			<DisplayImage />
			<TabContent />
			{activeTab === 'score' && !hasVoted ? <VoteBtn /> : ''}
			{activeTab === 'comment' ? <CommentForm /> : ''}
			{activeTab === 'vote' ? <VoteForm /> : ''}
			<Tabs />
		</div>
	);
};

export default ExpandContent;
