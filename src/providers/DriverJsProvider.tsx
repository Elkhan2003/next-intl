'use client';
import { FC, ReactNode, useEffect } from 'react';
import 'driver.js/dist/driver.css';

interface IDriverJsProviderProps {
	children: ReactNode;
}

export const DriverJsProvider: FC<IDriverJsProviderProps> = ({ children }) => {
	useEffect(() => {
		// Динамический импорт driver.js только на клиенте
		const initDriver = async () => {
			if (typeof window !== 'undefined') {
				const { driver } = await import('driver.js');

				const driverObj = driver({
					showProgress: true,
					nextBtnText: 'Далее →',
					prevBtnText: '← Назад',
					steps: [
						{
							element: '#welcome-title',
							popover: {
								title: '👋 Добро пожаловать!',
								description:
									'Это главный заголовок нашего сайта. Здесь мы приветствуем новых посетителей и рассказываем о нашей миссии.',
								side: 'bottom',
								align: 'center'
								// onNextClick: () => {
								// 	// логика при клике на "Далее"
								// },
								// onPrevClick: () => {
								// 	// логика при клике на "Назад"
								// }
							}
						},
						{
							element: '#welcome-description',
							popover: {
								title: '📝 Описание проекта',
								description:
									'В этом разделе мы кратко описываем что делаем, какие услуги предоставляем и почему стоит выбрать именно нас.',
								side: 'bottom',
								align: 'center'
							}
						},
						{
							element: '#primary-btn',
							popover: {
								title: '🚀 Основное действие',
								description:
									'Эта кнопка ведет на наш основной сайт Elcho.dev, где вы можете узнать больше о наших проектах и услугах.',
								side: 'top',
								align: 'center'
							}
						},
						{
							element: '#secondary-btn',
							popover: {
								title: '💼 Портфолио',
								description:
									'Здесь вы можете посмотреть наши работы, изучить кейсы и оценить качество наших решений.',
								side: 'top',
								align: 'center'
							}
						},
						{
							element: '#decoration',
							popover: {
								title: '✨ Декоративные элементы',
								description:
									'Эти анимированные элементы создают современный и привлекательный визуальный эффект для лучшего пользовательского опыта.',
								side: 'left',
								align: 'center'
							}
						},
						//
						{
							element: '#footer-info',
							popover: {
								title: 'Это твой разработчик 👨‍💻',
								description:
									'Elcho.dev - это мой личный сайт, где я делюсь своими проектами и услугами. Если вам понравился этот сайт, вы можете заказать разработку своего сайта у меня.',
								side: 'bottom',
								align: 'center'
							}
						}
					]
				});

				// Автоматически запускаем тур через небольшую задержку
				setTimeout(() => {
					driverObj.drive();
				}, 1000);
			}
		};

		initDriver();
	}, []);

	return children;
};
