import './HeartBox.scss';
import { ReactComponent as IconHeart } from '../../../../../assets/icons/IconHeart.svg';
import { Fragment, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { selectHasLikedImage, setHasLikedImage } from '../../../store/activeContentSlice';

type Props = {
	doubleTapped: boolean;
};

const HeartBox: React.FC<Props> = ({ doubleTapped }) => {
	const dispatch = useAppDispatch();
	const hasLikedImage = useAppSelector(selectHasLikedImage);
	const [count, setCount] = useState(999);
	const [showAnimation, setShowAnimation] = useState(false);

	useEffect(() => {
		if (doubleTapped && !hasLikedImage) {
			dispatch(setHasLikedImage(true));
			setCount((prev) => prev + 1);
			setShowAnimation(true);
		} else {
			setShowAnimation(false);
		}
	}, [doubleTapped]);

	const handleOnClick = () => {
		if (hasLikedImage) setCount((prev) => prev - 1);
		else setCount((prev) => prev + 1);
		dispatch(setHasLikedImage(!hasLikedImage));
	};

	return (
		<Fragment>
			<div className="heartBox">
				<IconHeart
					className={`icon--sm ${!hasLikedImage ? 'iconHeart--white' : 'iconHeart--red'}`}
					onClick={handleOnClick}
				/>
				<span className="numLikes">{count}</span>
			</div>
			<div className={`doubleTapAnimate ${showAnimation ? 'show' : 'hide'}`}>
				<IconHeart className={`iconHeart iconHeart--white`} />
			</div>
		</Fragment>
	);
};

export default HeartBox;
