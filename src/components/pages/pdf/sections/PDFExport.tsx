'use client';
import { FC } from 'react';
import scss from './PDFExport.module.scss';
import { Invoice } from '@/components/invoice/Invoice';

export const PDFExport: FC = () => {
	return (
		<section className={scss.PDFExport}>
			<Invoice />
		</section>
	);
};
