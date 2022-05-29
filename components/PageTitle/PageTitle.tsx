import React from 'react';
import { PageTitleProps } from "./PageTitle.props";
import classNames from "classnames";
import styles from './PageTitle.module.scss';

export const PageTitle = ({
							  color = 'white',
							  className,
							  variant,
							  children,
							  lineHeight = '130',
							  weight = 'bold'
						  }: PageTitleProps) => {

	const titleClass = classNames(
		styles.title, className,
		styles[`title__${variant}`],
		styles[`title__${color}`],
		styles[`title__${lineHeight}`],
		styles[`title__${weight}`],
	);

	const CustomTag: keyof JSX.IntrinsicElements = variant;

	return (
		<CustomTag className={titleClass}>
			{children}
		</CustomTag>
	);
};
