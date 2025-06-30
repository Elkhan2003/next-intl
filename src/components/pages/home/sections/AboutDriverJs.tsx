'use client';
import { FC } from 'react';
import scss from './AboutDriverJs.module.scss';
import { useTranslations } from 'next-intl';

export const AboutDriverJs: FC = () => {
	const t = useTranslations('AboutDriverJs');

	const startTour = async () => {
		if (typeof window !== 'undefined') {
			const { driver } = await import('driver.js');

			const driverObj = driver({
				showProgress: true,
				steps: [
					{
						element: '#about-title',
						popover: {
							title: t('tour.titleStep'),
							description: t('tour.titleDescription'),
							side: 'bottom',
							align: 'center'
						}
					},
					{
						element: '#features-list',
						popover: {
							title: t('tour.featuresStep'),
							description: t('tour.featuresDescription'),
							side: 'top',
							align: 'center'
						}
					},
					{
						element: '#demo-buttons',
						popover: {
							title: t('tour.demoBtnStep'),
							description: t('tour.demoBtnDescription'),
							side: 'top',
							align: 'center'
						}
					}
				]
			});

			driverObj.drive();
		}
	};

	const highlightExample = async () => {
		if (typeof window !== 'undefined') {
			const { driver } = await import('driver.js');

			const driverObj = driver();
			driverObj.highlight({
				element: '#highlight-example',
				popover: {
					title: t('highlight.title'),
					description: t('highlight.description'),
					side: 'bottom',
					align: 'center'
				}
			});
		}
	};

	return (
		<section className={scss.AboutDriverJs}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.hero}>
						<h2 id="about-title" className={scss.title}>
							{t('title')}
						</h2>
						<p className={scss.description}>{t('description')}</p>
					</div>

					<div className={scss.features}>
						<h3 className={scss.featuresTitle}>{t('features.title')}</h3>
						<div id="features-list" className={scss.featuresList}>
							<div className={scss.feature}>
								<div className={scss.featureIcon}>🎯</div>
								<h4>{t('features.highlighting.title')}</h4>
								<p>{t('features.highlighting.description')}</p>
							</div>
							<div className={scss.feature}>
								<div className={scss.featureIcon}>🚀</div>
								<h4>{t('features.tours.title')}</h4>
								<p>{t('features.tours.description')}</p>
							</div>
							<div className={scss.feature}>
								<div className={scss.featureIcon}>⚙️</div>
								<h4>{t('features.customization.title')}</h4>
								<p>{t('features.customization.description')}</p>
							</div>
							<div className={scss.feature}>
								<div className={scss.featureIcon}>📱</div>
								<h4>{t('features.responsive.title')}</h4>
								<p>{t('features.responsive.description')}</p>
							</div>
						</div>
					</div>

					<div className={scss.demo}>
						<h3 className={scss.demoTitle}>{t('demo.title')}</h3>
						<p className={scss.demoDescription}>{t('demo.description')}</p>
						<div id="demo-buttons" className={scss.demoButtons}>
							<button className={scss.primaryBtn} onClick={startTour}>
								{t('demo.startTour')}
							</button>
							<button className={scss.secondaryBtn} onClick={highlightExample}>
								{t('demo.highlight')}
							</button>
						</div>
						<div id="highlight-example" className={scss.exampleElement}>
							{t('demo.exampleElement')}
						</div>
					</div>

					<div className={scss.codeExample}>
						<h3 className={scss.codeTitle}>{t('code.title')}</h3>
						<div className={scss.codeBlock}>
							<pre className={scss.code}>
								{`import { driver } from 'driver.js';

const driverObj = driver({
  showProgress: true,
  steps: [
    {
      element: '#welcome-title',
      popover: {
        title: '${t('code.exampleTitle')}',
        description: '${t('code.exampleDescription')}',
        side: 'bottom'
      }
    }
  ]
});

driverObj.drive();`}
							</pre>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
