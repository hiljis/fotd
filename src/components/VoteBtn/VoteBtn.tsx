import { setActiveTab } from '../../sections/MainList/store/activeContentSlice';
import { useAppDispatch } from '../../store/hooks';
import './VoteBtn.scss';

const VoteBtn: React.FC = () => {
	const dispatch = useAppDispatch();

	const handleOnClick = () => {
		dispatch(setActiveTab('vote'));
	};
	return (
		<button className="voteBtn" type="button" onClick={handleOnClick}>
			<span className="voteBtn--text">Vote</span>
		</button>
	);
};

export default VoteBtn;
