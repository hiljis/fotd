import { FormEvent, useState } from 'react';
import './CommentForm.scss';

const CommentForm: React.FC = () => {
	const [inputVal, setInputValue] = useState('');

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
		setInputValue(event.target.value);
	};

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setInputValue('');
	};

	return (
		<form className="commentForm" onSubmit={handleOnSubmit}>
			<input
				className="commentForm__input"
				type="text"
				placeholder="Comment..."
				value={inputVal}
				onChange={handleOnChange}
			/>
			<button className="commentForm__submit" type="submit">
				Comment
			</button>
		</form>
	);
};

export default CommentForm;
