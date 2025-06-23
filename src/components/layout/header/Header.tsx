'use client';
import { FC } from 'react';
import scss from './Header.module.scss';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export const Header: FC = () => {
	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<span className={scss.logoText}>Elcho</span>
						<span className={scss.logoAccent}>Dev</span>
					</div>
					<LanguageSwitcher />
				</div>
			</div>
		</header>
	);
};
