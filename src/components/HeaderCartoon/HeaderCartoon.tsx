import { Fragment } from 'react';
import './HeaderCartoon.scss';

type Props = {
	size: 16 | 24 | 32 | 42 | 64 | 128;
	uppercase: boolean;
	lineOne: string;
	lineTwo?: string;
};

const sizeToYCoord = (size: 16 | 24 | 32 | 42 | 64 | 128) => {
	if (size === 16) return 13;
	else if (size === 24) return 20;
	else if (size === 32) return 30;
	else if (size === 42) return 37;
	else if (size === 64) return 48;
	else if (size === 128) return 93;
};

const HeaderCartoon: React.FC<Props> = ({ size, lineOne, lineTwo, uppercase }) => {
	const yCoord = sizeToYCoord(size);

	if (lineTwo) {
		return (
			<div className={`headerCartoon__container size--${size}`}>
				<h3 className={`headerCartoon size--${size}`}>
					<svg xmlns="http://www.w3.org/2000/svg" className={`size--${size}`}>
						<text x="1" y={yCoord} className={`size--${size} ${uppercase ? 'uppercase' : ''}`}>
							{lineOne}
						</text>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" className={`shadow ${`size--${size}`}`}>
						<text x="1" y={yCoord} className={`size--${size} shadow ${uppercase ? 'uppercase' : ''}`}>
							{lineOne}
						</text>
					</svg>
				</h3>
				<h3 className={`headerCartoon headerCartoon--2 size--${size}`}>
					<svg xmlns="http://www.w3.org/2000/svg" className={`size--${size}`}>
						<text x="1" y={yCoord} className={`size--${size} ${uppercase ? 'uppercase' : ''}`}>
							{lineTwo}
						</text>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" className={`shadow ${`size--${size}`}`}>
						<text x="1" y={yCoord} className={`size--${size} shadow ${uppercase ? 'uppercase' : ''}`}>
							{lineTwo}
						</text>
					</svg>
				</h3>
			</div>
		);
	} else {
		return (
			<h3 className={`headerCartoon size--${size}`}>
				<svg xmlns="http://www.w3.org/2000/svg" className={`size--${size}`}>
					<text x="1" y={yCoord} className={`size--${size} ${uppercase ? 'uppercase' : ''}`}>
						{lineOne}
					</text>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" className={`shadow ${`size--${size}`}`}>
					<text x="1" y={yCoord} className={`size--${size} shadow ${uppercase ? 'uppercase' : ''}`}>
						{lineOne}
					</text>
				</svg>
			</h3>
		);
	}
};

export default HeaderCartoon;
