import './HeartBox.scss';
import { ReactComponent as IconHeart } from '../../../../../assets/icons/IconHeart.svg';
import { useState } from 'react';
import { useAppDispatch } from '../../../../../store/hooks';
import { setHasLikedImage } from '../../ExpandContent/store/activeContentSlice';

type Props = {
	isActive: boolean;
};

const HeartBox: React.FC<Props> = ({ isActive }) => {
	const dispatch = useAppDispatch();
	const [count, setCount] = useState(999);

	const handleClick = () => {
		if (isActive) setCount((prev) => prev - 1);
		else setCount((prev) => prev + 1);
		dispatch(setHasLikedImage(!isActive));
	};

	return (
		<div className="heartBox" onClick={handleClick}>
			<IconHeart className={`icon--sm ${isActive ? 'iconHeart--white' : 'iconHeart--red'}`} />
			<span className="numLikes">{count}</span>
		</div>
	);
};

export default HeartBox;
