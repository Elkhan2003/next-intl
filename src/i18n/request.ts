import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { routing } from './routing';

export default getRequestConfig(async () => {
	// Получаем локаль из cookies или используем дефолтную
	const cookieStore = await cookies();
	const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

	// Проверяем, что локаль поддерживается
	const locale = routing.locales.includes(cookieLocale as any)
		? (cookieLocale as any)
		: routing.defaultLocale;

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default
	};
});
