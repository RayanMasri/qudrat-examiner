import React, { useState } from 'react';
import useUtilityHook from '../hooks/UtilityHook';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const statuses = {
	'incorrect': 'خاطئ',
	'missing': 'مفقود',
	'unsure': 'غير متأكد',
	'inconsistent': 'غير متوافق',
	'incomplete': 'غير مكتمل',
	'non-existent': 'غير متواجد', // في النماذج
	'difficult': 'صعب',
	'confirmed': 'متأكد',
	'normal': 'عادي',
};

export default function Question(props) {
	// const [state, setState] = useState({
	// 	selected: props.value,
	// });

	const parseStatus = () => {
		let status = props.status;
		if (!status.includes('&')) return statuses[status];

		return status
			.split('&')
			.map((item) => {
				return statuses[item.trim()];
			})
			.join(' و ');
	};

	const getResultIcon = (expression) => {
		return expression == null ? null : expression ? (
			<CheckIcon
				sx={{
					color: 'lightgreen',
				}}
			/>
		) : (
			<ClearIcon
				sx={{
					color: 'red',
				}}
			/>
		);
	};

	return (
		<div className='question'>
			<div className='title'>
				<div
					style={{
						color: '#77A6B6',
						fontSize: '40px',
						fontFamily: 'IBM',
					}}
				>
					{props.name}
				</div>
				<div className='status'>
					<div>{parseStatus()}</div>
				</div>
			</div>
			<div className='answers'>
				{props.answers.map((item, index) => {
					// FIXME: Fix problem at the core
					if (item == props.name) return null;
					return (
						<div className='answer'>
							<input
								type='radio'
								// checked={state.selected == item}
								checked={props.value == item}
								onChange={() => {
									// setState({
									// 	...state,
									// 	selected: item,
									// });

									props.onChange(item);
								}}
							></input>
							<div
								style={{
									marginLeft: '5px',
								}}
							>
								{item}
							</div>

							{getResultIcon(props.result != null ? props.result[index] : null)}
						</div>
					);
				})}
				{/* {state.answers.map(({ answer, index }) => {
					return (
						<div className='answer'>
							<div>{answer}</div>
							<input
								type='radio'
								checked={state.index == index}
								onChange={() => {
									setState({
										...state,
										index: index,
									});
								}}
							/>
						</div>
					);
				})} */}
			</div>
		</div>
	);
}
