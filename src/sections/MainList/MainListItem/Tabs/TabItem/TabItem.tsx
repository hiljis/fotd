import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { selectActiveTab, setActiveTab, Tab } from '../../../store/activeContentSlice';
import './TabItem.scss';

type Props = {
	children: React.ReactNode;
	target: Tab;
};

const TabItem: React.FC<Props> = ({ children, target }) => {
	const dispatch = useAppDispatch();
	const activeTab = useAppSelector(selectActiveTab);

	const handleClick = () => {
		if (activeTab === target) dispatch(setActiveTab('none'));
		else dispatch(setActiveTab(target));
	};
	return (
		<div className={`tab ${target} ${activeTab === target ? 'active' : ''}`} onClick={handleClick}>
			{children}
		</div>
	);
};

export default TabItem;
