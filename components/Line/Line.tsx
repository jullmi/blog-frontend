import React from 'react';
import styles from './Line.module.scss';
import classNames from "classnames";
import { background } from "../../styles/classes/classes";

export const Line = () => {
	return (
		<div className={classNames(styles.line, background.gray)}/>
	);
};

