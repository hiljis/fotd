import DisplayImage from '../DisplayImage/DisplayImage';
import NavBar from '../NavBar/NavBar';
import TabContent from '../TabContentBox/TabContentBox';
import './ExpandContent.scss';

const ExpandContent: React.FC = () => {
	return (
		<div className="expandContent">
			<DisplayImage />
			<TabContent />
			<NavBar />
		</div>
	);
};

export default ExpandContent;
