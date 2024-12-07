import { Grid2 } from "@mui/material";
import { Image } from "../components/Image";
import { FormSignUp } from "../components/FormSignUp";

export const SignUp = () => {
    return (
			<Grid2 container>
				<Grid2 size={12}>
					<Grid2 container >
						<Image
							src='https://www.opresente.com.br/wp-content/uploads/2024/05/435773565_25064574253186029_251741976377655504_n.jpg.webp'
							alt='Amanhecer'
						/>
						<FormSignUp />
					</Grid2>
				</Grid2>
			</Grid2>
		);
}