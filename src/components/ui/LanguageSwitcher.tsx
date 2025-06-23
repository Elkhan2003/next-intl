'use client';
import { FC } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
	const locale = useLocale();
	const router = useRouter();

	const languageNames = {
		en: 'English',
		ru: 'Русский'
	};

	const switchLanguage = (newLocale: string) => {
		// Устанавливаем cookie с выбранным языком
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

		// Перезагружаем страницу для применения нового языка
		router.refresh();
	};

	return (
		<div className={className}>
			<select
				value={locale}
				onChange={(e) => switchLanguage(e.target.value)}
				style={{
					background: '#1a1a1a',
					border: '1px solid #444',
					color: '#ccc',
					padding: '0.5rem',
					borderRadius: '4px',
					cursor: 'pointer'
				}}
			>
				{routing.locales.map((loc) => (
					<option key={loc} value={loc}>
						{languageNames[loc as keyof typeof languageNames] ||
							loc.toUpperCase()}
					</option>
				))}
			</select>
		</div>
	);
};
