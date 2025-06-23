"use client";
import { FC } from "react";
import scss from "./Welcome.module.scss";
import { useTranslations } from "next-intl";

export const Welcome: FC = () => {
	const t = useTranslations("HomePage");

	return (
		<section className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<h1>{t("title", { count: 3580 })}</h1>
				</div>
			</div>
		</section>
	);
};
