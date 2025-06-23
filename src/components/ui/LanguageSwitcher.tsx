'use client';
import { FC, useState, useRef, useEffect } from 'react';
import scss from './LanguageSwitcher.module.scss';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { IoIosArrowDown } from 'react-icons/io';

interface LanguageSwitcherProps {
	className?: string;
}

const languages = {
	en: { name: 'English', flag: '🇺🇸' },
	ru: { name: 'Русский', flag: '🇷🇺' }
};

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
	const locale = useLocale();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const switchLanguage = (newLocale: string) => {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		setIsOpen(false);
		router.refresh();
	};

	useEffect(() => {
		if (!isOpen) return;

		const handleClick = (e: MouseEvent) => {
			if (!dropdownRef.current?.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpen(false);
		};

		document.addEventListener('mousedown', handleClick);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('mousedown', handleClick);
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen]);

	const currentLang = languages[locale as keyof typeof languages];

	return (
		<div
			className={`${scss.LanguageSwitcher} ${className || ''}`}
			ref={dropdownRef}
		>
			<button
				className={`${scss.trigger} ${isOpen ? scss.open : ''}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className={scss.flag}>{currentLang.flag}</span>
				<span className={scss.label}>{currentLang.name}</span>
				<span className={`${scss.arrow} ${isOpen ? scss.rotated : ''}`}>
					<IoIosArrowDown />
				</span>
			</button>

			{isOpen && (
				<div className={scss.dropdown}>
					<div className={scss.options}>
						{routing.locales.map((loc) => {
							const lang = languages[loc as keyof typeof languages];
							const isActive = loc === locale;

							return (
								<button
									key={loc}
									className={`${scss.option} ${isActive ? scss.active : ''}`}
									onClick={() => switchLanguage(loc)}
								>
									<span className={scss.flag}>{lang.flag}</span>
									<span className={scss.optionLabel}>{lang.name}</span>
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};
