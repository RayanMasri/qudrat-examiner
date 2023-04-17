import React, { useEffect, useState } from 'react';
// import history from './history.json';
import data from './data.json';
import Question from './components/Question';
import { Divider } from '@mui/material';
import Model from './components/Model';
import './session.scss';
import useUtilityHook from './hooks/UtilityHook';

export default function Session(props) {
	const { shuffleArray, getLocal, setLocal } = useUtilityHook();
	const [state, setState] = useState({
		data: null,
	});

	const getFilteredData = (shuffle = true) => {
		return Object.fromEntries(
			Object.entries(data)
				.map(([model, skills]) => {
					for (let skill of Object.keys(skills)) {
						skills[skill] = skills[skill]
							.filter((item) => item.data.status != 'normal')
							.map((item) => {
								let original = item.data.answers;
								let shuffled = shuffleArray(Array.from(original));

								return shuffle
									? {
											...item,
											data: {
												...item.data,
												answers: shuffled,
												shuffle: shuffled.map((item) => original.indexOf(item)),
												pick: null,
											},
									  }
									: item;
							});
						if (skills[skill].length == 0) delete skills[skill];
					}
					return Object.keys(skills).length == 0 ? undefined : [model, skills];
				})
				.filter((item) => item)
		);
	};

	// let questions = {};
	// Object.entries(data).map(([model, value]) => {
	// 	Object.entries(value).map(([skill, value]) => {
	// 		if (!Object.keys(questions).includes(skill)) {
	// 			questions[skill] = [];
	// 		}

	// 		questions[skill].push(value.filter((item) => item.status != 'normal'));
	// 	});
	// });
	// for (let key of Object.keys(questions)) {
	// 	questions[key] = questions[key].flat();
	// }

	const onScroll = () => {
		let scroll = document.querySelector('#session-page').scrollTop;
		console.log(`Scroll changed to ${scroll}`);
		localStorage.setItem('scroll-value', scroll.toString());
	};

	useEffect(() => {
		let session = getLocal('session');

		let scroll = parseInt(localStorage.getItem('scroll-value') || '0');
		console.log(`Scroll initialized on: ${scroll}`);
		setTimeout(function () {
			document.querySelector('#session-page').scrollTop = scroll;
		}, 100);

		if (session.data == null) {
			console.log('Session data not initialized, initializing...');
			let models = getFilteredData();
			setLocal('session', {
				...session,
				data: Object.values(models)
					.map((item) => Object.values(item))
					.flat()
					.flat()
					.map((item) => {
						return {
							id: item.id,
							shuffle: item.data.shuffle,
							pick: null,
						};
					}),
			});

			setState({
				...state,
				data: models,
			});
		} else {
			let models = getFilteredData(false);
			// console.log(Object.assign({}, models));

			console.log('Session data exists, re-sorting & re-picking answers');
			models = Object.fromEntries(
				Object.entries(models).map(([key, value]) => {
					return [
						key,
						Object.fromEntries(
							Object.entries(value).map(([key, value]) => {
								return [
									key,
									value.map((item) => {
										let result = session.data.find((_item) => _item.id == item.id);

										return {
											...item,
											data: {
												...item.data,
												answers: result.shuffle.map((index) => item.data.answers[index]),
												pick: result.pick,
											},
										};
									}),
								];
							})
						),
					];
				})
			);

			setState({
				...state,
				data: models,
			});
		}

		document.querySelector('#session-page').addEventListener('scroll', onScroll);
		return () => {
			document.querySelector('#session-page').removeEventListener('scroll', onScroll);
		};
	}, []);

	const onChange = (id, pick) => {
		let session = getLocal('session');
		session.data[session.data.findIndex((item) => item.id == id)].pick = pick;
		setLocal('session', {
			...session,
			data: session.data,
		});
	};

	let history = getLocal('history');

	return (
		<div id='session-page'>
			<div className='header'>
				<div>Session {history.length + 1}</div>
				<div>Answered 5/170</div>
			</div>
			<div className='content'>
				{state.data != null
					? Object.entries(state.data).map(([model, content]) => {
							return <Model name={model} content={content} onChange={onChange} />;
					  })
					: null}
			</div>
		</div>
	);
}
