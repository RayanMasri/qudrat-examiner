import './App.scss';
import data from './data.json';
// import history from './history.json';
import { useNavigate } from 'react-router-dom';
import { Button, Divider } from '@mui/material';
import useUtilityHook from './hooks/UtilityHook';

const StatisticModal = (props) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: 'max-content',
				width: '250px',
				backgroundColor: '#62BBC1',
				color: 'white',

				borderRadius: '10px',
			}}
		>
			<div
				style={{
					padding: '5px 0px 5px 0px',
					color: 'white',
				}}
			>
				{props.title}
			</div>
			<Divider style={{ width: '100%', backgroundColor: 'white' }} />
			<div
				style={{
					padding: '15px 20px 15px 20px',
					boxSizing: 'border-box',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<div>Mean: {props.mean}</div>
				<div>Latest: {props.latest}</div>
			</div>

			<Divider style={{ width: '100%', backgroundColor: 'white' }} />
			<Button
				style={{
					backgroundColor: '#A33B20',
					width: '100%',
					height: '40px',
					color: '#30332E',
					fontWeight: 'bolder',
					borderTopRightRadius: '0px',
					borderTopLeftRadius: '0px',
				}}
			>
				View
			</Button>
		</div>
	);
};

export default function App() {
	const navigate = useNavigate();
	const { setLocal, getLocal } = useUtilityHook();

	// console.log(data);
	// const proceed = (name) => {
	//   navigate("/pick", { state: { name: name } });
	// };

	let history = getLocal('history') || [];

	return (
		<div id='app'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					justifyContent: 'flex-start',
					alignItems: 'center',
					height: '100%',
					// backgroundColor: 'green',
					width: '100%',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: '0',
						marginTop: '10px',
						color: 'white',
						fontSize: '25px',
					}}
				>
					Statistics
				</div>

				<div className='statistic-groups'>
					<div className='model-specific-group'>
						<div>Model-specific</div>
						<div>
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
						</div>
					</div>
					<Divider style={{ height: '100%', backgroundColor: 'white' }} orientation='vertical' />
					<div className='models-group'>
						<div>Models</div>
						<div>
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
						</div>
					</div>
					<Divider style={{ height: '100%', backgroundColor: 'white' }} orientation='vertical' />
					<div className='skills-group'>
						<div>Skills</div>
						<div>
							<StatisticModal title='التناظر اللفظي' mean={'100%'} latest={'100%'} />
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',

					padding: '0px 20px 0px 20px',
					borderLeft: '3px solid white',
					width: 'max-content',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: '0',
						marginTop: '10px',
						color: 'white',
						fontSize: '25px',
					}}
				>
					Training
				</div>
				<Button
					style={{
						backgroundColor: '#62BBC1',
						color: 'white',
						fontSize: '35px',
						textTransform: 'none',
						marginBottom: '10px',
					}}
					onClick={() => {
						setLocal('history', [
							...history,
							{
								session: history.length,
								date: Date.now(),
								submits: [],
							},
						]);
						setLocal('session', {
							id: history.length,
							data: null,
						});
						setLocal('scroll', '0');

						navigate('/session');
					}}
				>
					Begin session {history.length + 1}
				</Button>
				{history.length > 0 ? (
					<Button
						style={{
							backgroundColor: '#62BBC1',
							color: 'white',
							fontSize: '35px',
							textTransform: 'none',
						}}
						onClick={() => {
							navigate('/session');
						}}
					>
						Continue session {history.length}
					</Button>
				) : null}
			</div>

			{/* <div className="title-card-container">
        {Object.keys(data).map((item) => {
          return (
            <div className="title-card" onClick={() => proceed(item)}>
              {item}
            </div>
          );
        })}
      </div> */}
		</div>
	);
}
