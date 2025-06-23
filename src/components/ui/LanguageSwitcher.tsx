'use client';
import { FC, useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';
import scss from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
	const locale = useLocale();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const languageNames = {
		en: 'English',
		ru: 'Русский'
	};

	const languageFlags = {
		en: '🇺🇸',
		ru: '🇷🇺'
	};

	const switchLanguage = (newLocale: string) => {
		// Устанавливаем cookie с выбранным языком
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

		setIsOpen(false);

		// Перезагружаем страницу для применения нового языка
		router.refresh();
	};

	// Закрытие при клике вне компонента
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleEscape);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen]);

	const currentLanguage = languageNames[locale as keyof typeof languageNames];
	const currentFlag = languageFlags[locale as keyof typeof languageFlags];

	return (
		<div
			className={`${scss.LanguageSwitcher} ${className || ''}`}
			ref={dropdownRef}
		>
			<button
				className={`${scss.trigger} ${isOpen ? scss.open : ''}`}
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				type="button"
			>
				<span className={scss.flag}>{currentFlag}</span>
				<span className={scss.label}>{currentLanguage}</span>
				<span className={`${scss.arrow} ${isOpen ? scss.rotated : ''}`}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 4.5L6 7.5L9 4.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</button>

			<div className={`${scss.dropdown} ${isOpen ? scss.visible : ''}`}>
				<div className={scss.options}>
					{routing.locales.map((loc) => (
						<button
							key={loc}
							className={`${scss.option} ${loc === locale ? scss.active : ''}`}
							onClick={() => switchLanguage(loc)}
							type="button"
							role="option"
							aria-selected={loc === locale}
						>
							<span className={scss.flag}>
								{languageFlags[loc as keyof typeof languageFlags]}
							</span>
							<span className={scss.optionLabel}>
								{languageNames[loc as keyof typeof languageNames] ||
									loc.toUpperCase()}
							</span>
							{loc === locale && (
								<span className={scss.checkmark}>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.5 4.5L6 12L2.5 8.5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							)}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
