'use client';
import { useContext } from 'react';
import { Driver } from 'driver.js';
import { DriverJsContext } from '@/providers/DriverJsProvider';

interface UseDriverJsReturn {
	driver: Driver | null;
	startTour: () => void;
	isReady: boolean;
}

export const useDriverJs = (): UseDriverJsReturn => {
	const { driver, startTour, isReady } = useContext(DriverJsContext);

	return {
		driver,
		startTour,
		isReady
	};
};
