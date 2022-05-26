import React from 'react';
import { MobileMenuProps } from "./MobileMenu.props";
import { AnimatePresence } from "framer-motion";
import { Portal } from "@reach/portal";
import styles from './MobileMenu.module.scss';
import classNames from "classnames";
import { background, padding } from "../../../styles/classes/classes";
import Close from '../../../public/icons/close.svg';

export const MobileMenu = ({show, onDismiss}: MobileMenuProps) => {
	return (
		<AnimatePresence>
			{
				show && (
					<Portal>
						<div className={styles.overlay}>
							<div className={classNames(styles.container, background.darkGray)}>
								<Close className={styles.icon} onClick={onDismiss}/>
							</div>
						</div>
					</Portal>
				)
			}

		</AnimatePresence>
	);
};

