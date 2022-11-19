import HeaderCartoon from '../../../../../../components/HeaderCartoon/HeaderCartoon';
import './ContentInfo.scss';

const ContentInfo: React.FC = () => {
	return (
		<div className="contentInfo">
			<div className="contentInfo__header__twoLines">
				<HeaderCartoon size={32} uppercase={false} lineOne="Up & Coming" lineTwo="Astronaut" />
			</div>
			<p className="contentInfo__paragraph">
				Lorem ipsum dolor sit amet consectetur. Nulla varius ac ultrices diam. Egestas lectus feugiat ultrices
				suspendisse. Porttitor tellus tortor nunc et condimentum fames tortor. Neque fringilla lectus integer
				diam a in condimentum.
			</p>
			<p className="contentInfo__paragraph">
				Lorem ipsum dolor sit amet consectetur. Nulla varius ac ultrices diam. Egestas lectus feugiat ultrices
				suspendisse. Porttitor tellus tortor nunc et condimentum fames tortor. Neque fringilla lectus integer
				diam a in condimentum.
			</p>
			<p className="contentInfo__paragraph">
				Lorem ipsum dolor sit amet consectetur. Nulla varius ac ultrices diam. Egestas lectus feugiat ultrices
				suspendisse. Porttitor tellus tortor nunc et condimentum fames tortor. Neque fringilla lectus integer
				diam a in condimentum.
			</p>
		</div>
	);
};

export default ContentInfo;
