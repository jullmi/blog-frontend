import React from "react";

export type HeaderVariants = 'h1'

export type HeaderWeight = 'light' | 'medium' | 'regular' | 'bold'

export type HeaderLineHeight = '130' | '150'

export type HeaderColor = 'white'

export interface PageTitleProps {
	variant: HeaderVariants;
	weight?: HeaderWeight;
	lineHeight?: HeaderLineHeight;
	className?: string;
	children: React.ReactNode;
	color?: HeaderColor;
}