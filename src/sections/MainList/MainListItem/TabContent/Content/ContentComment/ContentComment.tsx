import Comment from '../../../../../../components/Comment/Comment';
import HeaderCartoon from '../../../../../../components/HeaderCartoon/HeaderCartoon';
import './ContentComment.scss';

interface IComment {
	author: string;
	date: Date;
	text: string;
}

const comments: IComment[] = [
	{
		author: 'hiljis',
		date: new Date('December 2, 2022'),
		text: 'Super Cool',
	},
	{
		author: 'majkon',
		date: new Date('December 3, 2022'),
		text: 'Great work!',
	},
	{
		author: 'peter98',
		date: new Date('December 5, 2022'),
		text: 'Piece of shit!!!',
	},
	{
		author: 'lambo13',
		date: new Date('December 5, 2022'),
		text: 'Love love love <3',
	},
	{
		author: 'lazyPoet',
		date: new Date('December 19, 2022'),
		text: 'Damn, that some quality digiart',
	},
	{
		author: 'emmaL',
		date: new Date('December 23, 2022'),
		text: 'I want! :)',
	},
];

const ContentComment: React.FC = () => {
	const sortedComments = comments.sort((a, b) => {
		return a.date < b.date ? -1 : 1;
	});

	return (
		<div className="contentComment">
			<div className="contentComment__header">
				<HeaderCartoon size={32} uppercase={true} lineOne="comments" />
			</div>
			<div className="commentList">
				{sortedComments.map((comment, i) => {
					return (
						<Comment date={comment.date} author={comment.author} key={i}>
							{comment.text}
						</Comment>
					);
				})}
				<div className="commentList__end">END</div>
			</div>
		</div>
	);
};

export default ContentComment;
