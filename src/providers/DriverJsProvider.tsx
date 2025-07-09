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
								element: '#enter_the_chart_period',
								popover: {
									title: 'Введите период графика',
									description:
										'Для удобства можете использовать календарь, нажав на иконку календарь',
									side: 'bottom',
									align: 'center'
								}
							},
							{
								element: '#select_the_weekdays',
								popover: {
									title: 'Выделите рабочие дни недели',
									description: '',
									side: 'bottom',
									align: 'center'
								}
							},
							{
								element: '#you_can_add_a_break_during_the_workday',
								popover: {
									title: 'Можете добавить перерыв в рабочем дне.',
									description: 'Нажав на плюсик, укажите промежуток перерыва',
									side: 'top',
									align: 'center'
								}
							},
							{
								element: '#click_the_plus_icon_to_specify_the_break_interval',
								popover: {
									title: 'Можете добавить перерыв в рабочем дне.',
									description: 'Нажав на плюсик, укажите промежуток перерыва',
									side: 'top',
									align: 'center'
								}
							},
							{
								element: '#click_the_minus_icon_to_remove_the_interval',
								popover: {
									title: '',
									description:
										'Нажав на иконку минус, можете убрать промежуток',
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
