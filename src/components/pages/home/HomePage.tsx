import { FC } from 'react';
import { Welcome } from './sections/Welcome';
import { AboutDriverJs } from './sections/AboutDriverJs';

export const HomePage: FC = () => {
	return (
		<>
			<Welcome />
			<AboutDriverJs />
		</>
	);
};
