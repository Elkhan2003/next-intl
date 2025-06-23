'use client';
import { FC } from 'react';
import scss from './Welcome.module.scss';
import { useTranslations } from 'next-intl';

export const Welcome: FC = () => {
	const t = useTranslations('HomePage');

	return (
		<section className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.hero}>
						<h1 className={scss.title}>{t('title')}</h1>
						<p className={scss.description}>{t('description')}</p>
						<div className={scss.actions}>
							<a
								href="https://elcho.dev"
								target="_blank"
								rel="noopener noreferrer"
								className={scss.primaryBtn}
							>
								Visit ElchoDev
							</a>
							<a href="#projects" className={scss.secondaryBtn}>
								View Projects
							</a>
						</div>
					</div>
					<div className={scss.decoration}>
						<div className={scss.circle}></div>
						<div className={scss.circle}></div>
						<div className={scss.circle}></div>
					</div>
				</div>
			</div>
		</section>
	);
};
