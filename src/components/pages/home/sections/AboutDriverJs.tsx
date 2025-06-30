'use client';
import { FC } from 'react';
import scss from './AboutDriverJs.module.scss';

export const AboutDriverJs: FC = () => {
	return (
		<section className={scss.AboutDriverJs}>
			<div className="container">
				<div className={scss.content}>AboutDriverJs</div>
			</div>
		</section>
	);
};
