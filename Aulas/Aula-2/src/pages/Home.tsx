import { Grid2, Typography, Divider } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FloatButton } from "../components/FloatButton";
import { TableAssessments } from "../components/TableAssessments";
import { UpsertModal } from "../components/UpsertModal";
import { useAppSelector } from "../store/hooks";
// import { useAppSelector } from "../store/hook";

export function Home() {

	const [openModal, setOpenModal] = useState(false);
	const userLoggedRedux = useAppSelector((state) => state.userLogged)

	return (
		<Grid2
			container
			spacing={2}>
			<Grid2 size={12}>
				<Typography variant='h6'>
					Wellcome,{' '}
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
