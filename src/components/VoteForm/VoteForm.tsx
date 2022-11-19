import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import './VoteForm.scss';

type ScoreOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null;

const VoteForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const [checkedScore, setCheckedScore] = useState<ScoreOption>(null);

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (checkedScore !== null) {
			console.log(event);
		}
		// send dispatch to Vote. Thunk or Saga?
	};

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value) as ScoreOption;
		setCheckedScore(value);
	};

	console.log(checkedScore);
	return (
		<form className="voteForm" onSubmit={handleOnSubmit} name="voteOption">
			<fieldset className="voteForm__fieldset">
				<input
					type="radio"
					id="voteOption-1"
					name="voteOption"
					value={1}
					onChange={handleOnChange}
					checked={checkedScore === 1}
				/>
				<label className="checkLabel" htmlFor="voteOption-1">
					1
				</label>

				<input
					type="radio"
					id="voteOption-2"
					name="voteOption"
					value={2}
					onChange={handleOnChange}
					checked={checkedScore === 2}
				/>
				<label className="checkLabel" htmlFor="voteOption-2">
					2
				</label>

				<input
					type="radio"
					id="voteOption-3"
					name="voteOption"
					value={3}
					onChange={handleOnChange}
					checked={checkedScore === 3}
				/>
				<label className="checkLabel" htmlFor="voteOption-3">
					3
				</label>

				<input
					type="radio"
					id="voteOption-4"
					name="voteOption"
					value={4}
					onChange={handleOnChange}
					checked={checkedScore === 4}
				/>
				<label className="checkLabel" htmlFor="voteOption-4">
					4
				</label>

				<input
					type="radio"
					id="voteOption-5"
					name="voteOption"
					value={5}
					onChange={handleOnChange}
					checked={checkedScore === 5}
				/>
				<label className="checkLabel" htmlFor="voteOption-5">
					5
				</label>

				<input
					type="radio"
					id="voteOption-6"
					name="voteOption"
					value={6}
					onChange={handleOnChange}
					checked={checkedScore === 6}
				/>
				<label className="checkLabel" htmlFor="voteOption-6">
					6
				</label>

				<input
					type="radio"
					id="voteOption-7"
					name="voteOption"
					value={7}
					onChange={handleOnChange}
					checked={checkedScore === 7}
				/>
				<label className="checkLabel" htmlFor="voteOption-7">
					7
				</label>

				<input
					type="radio"
					id="voteOption-8"
					name="voteOption"
					value={8}
					onChange={handleOnChange}
					checked={checkedScore === 8}
				/>
				<label className="checkLabel" htmlFor="voteOption-8">
					8
				</label>

				<input
					type="radio"
					id="voteOption-9"
					name="voteOption"
					value={9}
					onChange={handleOnChange}
					checked={checkedScore === 9}
				/>
				<label className="checkLabel" htmlFor="voteOption-9">
					9
				</label>

				<input
					type="radio"
					id="voteOption-10"
					name="voteOption"
					value={10}
					onChange={handleOnChange}
					checked={checkedScore === 10}
				/>
				<label className="checkLabel" htmlFor="voteOption-10">
					10
				</label>

				<button className={`submitVoteBtn ${checkedScore === null ? 'disabled' : ''}`} type="submit">
					Send Vote
				</button>
			</fieldset>
		</form>
	);
};

export default VoteForm;
