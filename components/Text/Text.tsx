import React, { ForwardedRef } from 'react';
import { TextProps } from "./Text.props";
import classNames from "classnames";
import styles from './Text.module.scss';

export const Text = React.forwardRef(({
						 children,
						 color = 'white',
						 className,
						 size = 'normal',
						 weight = 'regular',
						 lineHeight = '120',
						 asBlock,
						 hoverable
					 }: TextProps, ref: ForwardedRef<HTMLSpanElement>) => {

	const textClass = classNames(
		styles.text, className,
		styles[`text__${color}`],
		styles[`text__${size}`],
		styles[`text__${weight}`],
		styles[`text__${lineHeight}`],
		{
			[styles.text__hoverable]: hoverable,
			[styles.text__asBlock]: asBlock,
		}
	);

	return (
		<span className={textClass}>
			{children}
		</span>
	);
});

Text.displayName = 'Text';