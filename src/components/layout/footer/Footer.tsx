'use client';
import { FC } from 'react';
import scss from './Footer.module.scss';

export const Footer: FC = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<a href="https://elcho.dev" target="_blank">
						Built with ♡ by ElchoDev
					</a>
				</div>
			</div>
		</footer>
	);
};
