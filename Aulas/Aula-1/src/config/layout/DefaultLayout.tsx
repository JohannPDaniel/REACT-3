import { Header } from './../../components/Header/index';
interface DefaultLayoutProps {
	children: React.ReactNode;
}
export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<>
			<Header />
			{children}
			<small>Footer</small>
		</>
	);
};
