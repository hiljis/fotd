import './Tabs.scss';
import TabItem from './TabItem/TabItem';
import { ReactComponent as IconScore } from '../../../../assets/icons/IconScore.svg';
import { ReactComponent as IconComment } from '../../../../assets/icons/IconChat.svg';
import { ReactComponent as IconInfo } from '../../../../assets/icons/IconInfo.svg';
import { ReactComponent as IconSiluette } from '../../../../assets/icons/IconSiluette.svg';
import { useAppSelector } from '../../../../store/hooks';
import { selectActiveTab } from '../../store/activeContentSlice';

const Tabs: React.FC = () => {
	return (
		<nav className={`tabs`}>
			<TabItem target="info">
				<IconInfo className="icon--xs" />
			</TabItem>
			<TabItem target="creator">
				<IconSiluette className="icon--xs" />
			</TabItem>
			<TabItem target="nft">
				<span>NFT</span>
			</TabItem>
			<TabItem target="score">
				<IconScore className="icon--xs" />
			</TabItem>
			<TabItem target="comment">
				<IconComment className="icon--xs" />
			</TabItem>
		</nav>
	);
};

export default Tabs;
