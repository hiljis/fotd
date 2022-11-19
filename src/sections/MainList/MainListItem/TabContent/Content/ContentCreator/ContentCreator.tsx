import { Link } from 'react-router-dom';
import HeaderCartoon from '../../../../../../components/HeaderCartoon/HeaderCartoon';
import { ReactComponent as IconArrowRight } from '../../../../../../assets/icons/IconArrowRight.svg';
import './ContentCreator.scss';

interface Creator {
	name: string;
	nationality: string;
	contributions: number;
}

const creator: Creator = {
	name: 'Henric Hiljanen',
	nationality: 'Sweden',
	contributions: 21,
};

const ContentCreator: React.FC = () => {
	return (
		<div className="contentCreator">
			<div className="contentCreator__header">
				<HeaderCartoon size={32} uppercase={true} lineOne="creator" />
			</div>

			<div className="contentCreator__info contentCreator__info--1">
				<h5 className="contentCreator__info--title">Name</h5>
				<p className="contentCreator__info--value">{creator.name}</p>
			</div>

			<div className="contentCreator__info contentCreator__info--2">
				<h5 className="contentCreator__info--title">Nationality</h5>
				<p className="contentCreator__info--value">{creator.nationality}</p>
			</div>

			<div className="contentCreator__info content__info--3">
				<h5 className="contentCreator__info--title">FOTD Contributions</h5>
				<p className="contentCreator__info--value">{creator.contributions}</p>
			</div>

			<Link to={'/'} className="link__creatorGallery">
				<span>Creator Gallery</span>
				<IconArrowRight className="icon--xs" />
			</Link>
		</div>
	);
};

export default ContentCreator;
