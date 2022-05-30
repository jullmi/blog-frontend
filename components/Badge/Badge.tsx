import React from 'react';
import { BadgeProps } from "./Badge.props";
import styles from './Badge.module.scss';
import classNames from "classnames";
import Link from "next/link";
import { cursorPointer } from "../../styles/classes/classes";

export const Badge = ({type, children, href}: BadgeProps) => {

	const badgeClass = classNames(styles.badge, cursorPointer, styles[`badge__${type}`]);

	if (href) {
		return (
			<Link href={href} className={badgeClass}>
				<a>
					{children}
				</a>
			</Link>
		);
	}

	return (
		<div className={badgeClass}>
			{children}
		</div>
	);
};

