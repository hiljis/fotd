import { ReactComponent as IconArrowRight } from '../../../../../../assets/icons/IconArrowRight.svg';
import HeaderCartoon from '../../../../../../components/HeaderCartoon/HeaderCartoon';
import './ContentNft.scss';

const ContentNft: React.FC = () => {
	return (
		<div className="contentNft">
			<div className="contentNft__header">
				<HeaderCartoon size={32} uppercase={true} lineOne="nft" />
			</div>

			<span className="contentNft__status contentNft__status--pos">FOR SALE</span>

			<div className="contentNft__info contentNft__info--1">
				<h5 className="contentNft__info--title">Last Price</h5>
				<p className="contentNft__info--value">1.25 ETH</p>
			</div>

			<div className="contentNft__info contentNft__info--2">
				<h5 className="contentNft__info--title">Available at</h5>
				<a
					className="contentNft__info--link"
					href="https://opensea.io/"
					target="_blank"
					rel="noreferrer noopener"
				>
					<span>Open Sea</span>
					<IconArrowRight className="icon--xxs icon--strokeBlack" />
				</a>
			</div>

			<div className="contentNft__info contentNft__info--3">
				<h5 className="contentNft__info--title">FOTD Item</h5>
				<p className="contentNft__info--value"># 1</p>
			</div>

			<div className="contentNft__info contentNft__info--4">
				<h5 className="contentNft__info--title">Supply</h5>
				<p className="contentNft__info--value">1</p>
			</div>

			<div className="contentNft__info contentNft__info--properties">
				<h5 className="contentNft__info--title">Properties</h5>
				<div className="contentNft__info--tags">
					<span className="contentNft__info--tag">Woman</span>
					<span className="contentNft__info--tag">2022</span>
					<span className="contentNft__info--tag">November</span>
					<span className="contentNft__info--tag">Space</span>
					<span className="contentNft__info--tag">Ooak</span>
				</div>
			</div>
		</div>
	);
};

export default ContentNft;
