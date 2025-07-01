// DriverJsProvider.tsx
'use client';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import 'driver.js/dist/driver.css';
import { Driver } from 'driver.js';

interface IDriverJsContext {
	driver: Driver | null;
	startTour: () => void;
	isReady: boolean;
}

interface IDriverJsProviderProps {
	children: ReactNode;
}

export const DriverJsContext = createContext<IDriverJsContext>({
	driver: null,
	startTour: () => {},
	isReady: false
});

export const DriverJsProvider: FC<IDriverJsProviderProps> = ({ children }) => {
	const [driverInstance, setDriverInstance] = useState<Driver | null>(null);

	// Функции для работы с localStorage
	const saveCurrentStep = (stepIndex: number) => {
		localStorage.setItem('tourCurrentStep', String(stepIndex));
	};

	const getSavedStep = () => {
		const saved = localStorage.getItem('tourCurrentStep');
		return saved ? Number(saved) : 0;
	};

	const clearTourProgress = () => {
		localStorage.removeItem('tourCurrentStep');
		localStorage.setItem('tourCompleted', 'true');
	};

	// Функция для запуска тура
	const startTour = () => {
		if (!driverInstance) return;

		const savedStep = getSavedStep();
		const firstElement = document.querySelector('#welcome-title');

		if (firstElement) {
			if (savedStep > 0) {
				driverInstance.drive(savedStep);
			} else {
				driverInstance.drive();
			}
		}
	};

	useEffect(() => {
		const initDriver = async () => {
			if (typeof window !== 'undefined') {
				try {
					const { driver } = await import('driver.js');

					const driverObj = driver({
						showProgress: true,
						allowClose: false,
						nextBtnText: 'Далее →',
						prevBtnText: '← Назад',
						onHighlighted: () => {
							const currentStep = driverObj.getActiveIndex();
							if (currentStep !== null) {
								saveCurrentStep(currentStep!);
							}
						},
						onDestroyed: () => {
							clearTourProgress();
						},
						steps: [
							{
								element: '#welcome-title',
								popover: {
									title: '👋 Добро пожаловать!',
									description:
										'Это главный заголовок нашего сайта. Здесь мы приветствуем новых посетителей и рассказываем о нашей миссии.',
									side: 'bottom',
									align: 'center'
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

					setDriverInstance(driverObj);
				} catch (error) {
					console.error('Ошибка инициализации Driver.js:', error);
				}
			}
		};

		initDriver();
	}, []);

	const contextValue: IDriverJsContext = {
		driver: driverInstance,
		startTour,
		isReady: driverInstance !== null
	};

	return (
		<DriverJsContext.Provider value={contextValue}>
			{children}
		</DriverJsContext.Provider>
	);
};
