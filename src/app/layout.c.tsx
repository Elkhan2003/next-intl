'use client';
import { FC, ReactNode } from 'react';
import { DriverJsProvider } from '@/providers/DriverJsProvider';

interface ILayoutClientProps {
	children: ReactNode;
}

export const LayoutClient: FC<ILayoutClientProps> = ({ children }) => {
	return <DriverJsProvider>{children}</DriverJsProvider>;
};
