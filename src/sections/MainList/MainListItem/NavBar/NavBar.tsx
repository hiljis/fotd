import './NavBar.scss';
import NavItem from './NavItem/NavItem';
import { ReactComponent as IconVote } from '../../../../assets/icons/IconVote.svg';
import { ReactComponent as IconComment } from '../../../../assets/icons/IconChat.svg';
import { ReactComponent as IconInfo } from '../../../../assets/icons/IconInfo.svg';
import { ReactComponent as IconSiluette } from '../../../../assets/icons/IconSiluette.svg';

const NavBar: React.FC = () => {
	return (
		<nav className="navBar">
			<NavItem target="info">
				<IconInfo className="icon--xs" />
			</NavItem>
			<NavItem target="creator">
				<IconSiluette className="icon--xs" />
			</NavItem>
			<NavItem target="nft">
				<span>NFT</span>
			</NavItem>
			<NavItem target="vote">
				<IconVote className="icon--xs" />
			</NavItem>
			<NavItem target="comment">
				<IconComment className="icon--xs" />
			</NavItem>
		</nav>
	);
};

export default NavBar;
