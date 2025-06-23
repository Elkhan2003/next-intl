'use client';
import { FC } from 'react';
import scss from './Header.module.scss';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export const Header: FC = () => {
	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div>ElchoDev</div>
					<LanguageSwitcher />
				</div>
			</div>
		</header>
	);
};
