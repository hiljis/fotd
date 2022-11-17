import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { selectActiveTab, setActiveTab, Tab } from '../../ExpandContent/store/activeContentSlice';
import './NavItem.scss';

type Props = {
	children: React.ReactNode;
	target: Tab;
};

const NavItem: React.FC<Props> = ({ children, target }) => {
	const dispatch = useAppDispatch();
	const activeTab = useAppSelector(selectActiveTab);

	const handleClick = () => {
		if (activeTab === target) dispatch(setActiveTab('none'));
		else dispatch(setActiveTab(target));
	};
	return (
		<div className={`navItem ${target} ${activeTab === target ? 'active' : ''}`} onClick={handleClick}>
			{children}
		</div>
	);
};

export default NavItem;
