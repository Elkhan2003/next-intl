"use client";
import { FC, ReactNode } from "react";

interface ILayoutClientProps {
	children: ReactNode;
}

export const LayoutClient: FC<ILayoutClientProps> = ({ children }) => {
	return <>{children}</>;
};
