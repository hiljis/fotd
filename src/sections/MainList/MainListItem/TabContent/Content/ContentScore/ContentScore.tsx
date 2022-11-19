import HeaderCartoon from '../../../../../../components/HeaderCartoon/HeaderCartoon';
import { useAppSelector } from '../../../../../../store/hooks';
import { selectHasVoted } from '../../../../store/activeContentSlice';
import './ContentScore.scss';

const ContentScore: React.FC = () => {
	const hasVoted = useAppSelector(selectHasVoted);

	return (
		<div className="contentScore">
			<div className="contentScore__row">
				<HeaderCartoon size={32} uppercase={true} lineOne="score" />
				<div className="contentScore__score">
					<div className="contentScore__score--num">7.0</div>
					<div className="contentScore__score--unit">/&nbsp;10</div>
				</div>
			</div>

			<div className="contentScore__row">
				<HeaderCartoon size={24} uppercase={true} lineOne="votes" />
				<div className="contentScore__row--val">1227</div>
			</div>

			<div className="contentScore__row">
				<HeaderCartoon size={24} uppercase={true} lineOne="vote rank" />
				<div className="contentScore__row--val">#&nbsp;1</div>
			</div>

			{hasVoted ? (
				<div className="contentScore__row">
					<HeaderCartoon size={24} uppercase={true} lineOne="your vote" />
					<div className="contentScore__row--val">6</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default ContentScore;
