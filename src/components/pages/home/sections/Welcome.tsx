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
						<h1 id="welcome-title" className={scss.title}>
							{t('title')}
						</h1>
						<p id="welcome-description" className={scss.description}>
							{t('description')}
						</p>
						<div className={scss.actions}>
							<a
								id="primary-btn"
								href="https://elcho.dev"
								target="_blank"
								rel="noopener noreferrer"
								className={scss.primaryBtn}
							>
								{t('visitElchoDev')}
							</a>
							<a
								id="secondary-btn"
								href="https://elcho.dev"
								target="_blank"
								rel="noopener noreferrer"
								className={scss.secondaryBtn}
							>
								{t('viewProjects')}
							</a>
						</div>
					</div>
					<div id="decoration" className={scss.decoration}>
						<div className={scss.circle}></div>
						<div className={scss.circle}></div>
						<div className={scss.circle}></div>
					</div>
				</div>
			</div>
		</section>
	);
};
