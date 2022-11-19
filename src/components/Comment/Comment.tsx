import { numToMonth } from '../../utils/convert';
import { capFirst } from '../../utils/format';
import './Comment.scss';

type Props = {
	author?: string;
	date: Date;
	children: string;
};

const formatCommentDate = (date: Date) => {
	const day = date.getDate().toString().padStart(2, '0');
	const month = capFirst(numToMonth(date.getMonth()));
	return `${day} ${month} ${date.getFullYear()}`;
};

const Comment: React.FC<Props> = ({ author, date, children }) => {
	return (
		<div className="commentContainer">
			<div className="commentContainer--top">
				<span className="comment--author">{author ? author : 'Anonymous'}</span>
				<span className="comment--date">{formatCommentDate(date)}</span>
			</div>
			<p className="comment--text">{children}</p>
            <div className="comment--separator"></div>
		</div>
	);
};

export default Comment;
