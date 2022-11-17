import './DisplayImage.scss';
import ImgACarson from '../../../../assets/testImages/artACarson.webp';
import HeartBox from './HeartBox/HeartBox';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectHasLikedImage, setHasLikedImage } from '../ExpandContent/store/activeContentSlice';
import { useState } from 'react';

const DisplayImage: React.FC = () => {
	const dispatch = useAppDispatch();
	const hasLikedImage = useAppSelector(selectHasLikedImage);
	const [doubleTapped, setDoubleTapped] = useState(false);

	const handleDoubleClick = () => {
		dispatch(setHasLikedImage(!hasLikedImage));
		setDoubleTapped(true);
	};

	return (
		<div className="displayImage__container" onDoubleClick={handleDoubleClick}>
			<img className="displayImage" src={ImgACarson} alt="ALT TEXT HERE" />
			{hasLikedImage && doubleTapped ? <div className="dTBox">DOUBEL TAP</div> : ''}
			<HeartBox isActive={hasLikedImage} />
		</div>
	);
};

export default DisplayImage;
