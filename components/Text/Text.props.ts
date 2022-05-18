import React from "react";

type TextColor = 'white' | 'gray'
type TextSize = 'small' | 'normal' | 'big'
type TextLineHeight = '120' | '150'
type TextWeight = 'light' | 'regular' | 'medium' | 'bold'

export interface TextProps {
	children: React.ReactNode
	color?: TextColor;
	size?: TextSize;
	lineHeight?: TextLineHeight;
	weight?: TextWeight;
	className?: string;
	hoverable?: boolean;
	asBlock?: boolean;
}