import { Divider, Grid2, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatButton } from '../components/FloatButton';
import { TableAssessments } from '../components/TableAssessments';
import { UpsertModal } from '../components/UpsertModal';
import { useAppSelector } from '../store/hooks';

export function Home() {
	const navigate = useNavigate();
	const userLoggedRedux = useAppSelector((state) => state.userLogged);
	const assessmentDetailRedux = useAppSelector( ( state ) => state.assessmentDetail);
	const [ openModal, setOpenModal ] = useState( false );
	
	useEffect(() => {
		if (!userLoggedRedux) {
			navigate('/');
		}
	}, [userLoggedRedux, navigate]);

	// useEffect(() => {
	// 	setOpenModal(!!assessmentDetailRedux.id);
	// }, [assessmentDetailRedux]);

	return (
		<Grid2
			container
			spacing={2}>
			<Grid2 size={12}>
				<Typography variant='h6'>
					Welcome,{' '}
					<Typography
						component='span'
						variant='h6'
						sx={{ fontWeight: 'bold' }}>
						{userLoggedRedux.name}
					</Typography>
				</Typography>
			</Grid2>
			<Grid2 size={12}>
				<Divider />
			</Grid2>
			<Grid2 size={12}>
				<TableAssessments />
			</Grid2>

			<FloatButton onClick={() => setOpenModal(true)} />

			<UpsertModal
				open={openModal}
				onClose={() => setOpenModal(false)}
			/>
		</Grid2>
	);
}
