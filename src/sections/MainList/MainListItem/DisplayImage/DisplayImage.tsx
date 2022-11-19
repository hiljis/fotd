import './DisplayImage.scss';
import ImgACarson from '../../../../assets/testImages/artACarson.webp';
import HeartBox from './HeartBox/HeartBox';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectActiveTab, selectHasLikedImage, setActiveTab, setHasLikedImage } from '../../store/activeContentSlice';
import { useState } from 'react';

const DisplayImage: React.FC = () => {
	const dispatch = useAppDispatch();
	const [doubleTapped, setDoubleTapped] = useState(false);

	const handleOnDoubleClick = () => {
		setDoubleTapped(true);
		setTimeout(() => {
			setDoubleTapped(false);
		}, 800);
	};

	const handleOnClick = () => {
		dispatch(setActiveTab('none'));
	};

	return (
		<div className="displayImage__container" onDoubleClick={handleOnDoubleClick} onClick={handleOnClick}>
			<img className="displayImage" src={ImgACarson} alt="ALT TEXT HERE" />
			<HeartBox doubleTapped={doubleTapped} />
		</div>
	);
};

export default DisplayImage;
