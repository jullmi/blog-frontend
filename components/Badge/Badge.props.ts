import React from "react";

type BadgeType = 'white' | 'peach'

export interface BadgeProps {
	type: BadgeType;
	children: React.ReactNode;
	href?: string;
}