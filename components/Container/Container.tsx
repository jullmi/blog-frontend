import React from 'react';
import styles from './Container.module.scss';
import { ContainerProps } from "./Container.props";
import classNames from "classnames";
import { background } from "../../styles/classes/classes";

export const Container = ({className, children, theme = 'dark'}: ContainerProps) => {
	return (
		<div className={classNames({[background.darkGray] : theme === 'dark'})}>
			<div className={ classNames(styles.container, className)}>
				{children}
			</div>
		</div>
	);
};

Container.displayName = 'Container';