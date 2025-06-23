import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['ky', 'ru', 'en'],

	// Used when no locale matches
	defaultLocale: 'ky',
	localePrefix: 'never'
});
