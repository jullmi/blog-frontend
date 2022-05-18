import React from "react";

export type ThemeColor = 'dark' | 'light'

export interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	theme?: ThemeColor;
}