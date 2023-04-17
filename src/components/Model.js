import React, { useState } from 'react';
import { Button } from '@mui/material';
import Question from './Question';
import useUtilityHook from '../hooks/UtilityHook';

export default function Model(props) {
	const [state, setState] = useState({
		content: props.content,
		submit: null,
	});

	const { setLocal, getLocal } = useUtilityHook();

	const logSubmit = (log) => {
		const history = getLocal('history');
		const session = getLocal('session');

		let sessionIndex = history.findIndex((item) => item.session == session.id);

		history[sessionIndex] = {
			...history[sessionIndex],
			submits: [...history[sessionIndex].submits, log],
		};

		setLocal('history', history);
	};

	const onSubmit = (skill) => {
		let history = {
			name: props.name,
			skill: props.skill,
			answers: state.content[skill].map((item) => {
				return {
					id: item.id,
					pick: item.data.pick,
					result: item.data.pick == item.data.true_answer,
				};
			}),
			date: Date.now(),
		};

		logSubmit(history);

		let correct = state.content[skill].map((item) => (item.data.pick == item.data.true_answer ? 1 : 0)).reduce((a, b) => a + b, 0);
		let percentage = (correct / state.content[skill].length) * 100;

		setState({
			...state,
			submit: {
				...state.submit,
				[skill]: {
					percentage: percentage,
					count: `${correct}/${state.content[skill].length}`,
					incorrect: state.content[skill].filter((item) => item.data.pick != item.data.true_answer).map((item) => [item.id, item.data.pick, item.data.true_answer]),
				},
			},
		});
	};

	const getResult = (item, skill) => {
		if (state.submit == null || !Object.keys(state.submit).includes(skill)) return null;

		console.log(skill);
		console.log(state.submit);
		console.log(state.submit[skill]);

		let result = state.submit[skill].incorrect.find((element) => element[0] == item.id);
		return item.data.answers.map((answer) => {
			return result ? (answer == result[1] ? false : answer == result[2] ? true : null) : answer == item.data.true_answer ? true : null;
		});
	};

	return (
		<div className='model'>
			<div className='title'>{props.name}</div>
			{Object.entries(state.content).map(([name, data]) => {
				return (
					<div className='skill'>
						<div className='skill-title'>
							<div>{name}</div>
							{state.submit != null ? (
								Object.keys(state.submit).includes(name) ? (
									<div>
										{state.submit[name].percentage}%<br />
										{state.submit[name].count}
									</div>
								) : null
							) : null}
						</div>

						<div className='content'>
							{data.map((item) => {
								return (
									<Question
										name={item.name}
										answers={item.data.answers}
										status={item.data.status}
										value={item.data.pick}
										result={getResult(item, name)}
										onChange={(pick) => {
											let index = state.content[name].findIndex((element) => element.id == item.id);

											state.content[name][index] = {
												...state.content[name][index],
												data: {
													...state.content[name][index].data,
													pick: pick,
												},
											};

											setState({
												...state,
												content: state.content,
												submit: null,
											});

											console.log(state.content);
											console.log(`Changed pick of ${item.id} to ${pick} at index ${index}`);
											props.onChange(item.id, pick);
										}}
									/>
								);
							})}

							<Button
								className='submit-btn'
								style={{
									backgroundColor: '#885A89',
								}}
								onClick={() => onSubmit(name)}
							>
								Submit
							</Button>
						</div>
					</div>
				);
			})}
			<div className='divider' style={{ backgroundColor: '#38726C' }}>
				&nbsp;
			</div>
		</div>
	);
}
