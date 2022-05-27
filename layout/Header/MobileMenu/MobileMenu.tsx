import React, { MouseEventHandler, useEffect } from 'react';
import { MobileMenuProps } from "./MobileMenu.props";
import { AnimatePresence, motion } from "framer-motion";
import { Portal } from "@reach/portal";
import styles from './MobileMenu.module.scss';
import classNames from "classnames";
import { background, color } from "../../../styles/classes/classes";
import Close from '../../../public/icons/close.svg';
import { navigationMenu } from "../../../common/navigation-menu";
import { MenuItem } from "./MenuItem/MenuItem";
import { useRouter } from 'next/router';

export const MobileMenu = ({show, onDismiss}: MobileMenuProps) => {

	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = () => {
			onDismiss();
		};
		router.events.on('routeChangeStart', handleRouteChange);
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};

	}, []);

	const onClick: MouseEventHandler = (event) => {
		if (event.target === event.currentTarget) {
			onDismiss();
		}
	};

	return (
		<AnimatePresence>
			{
				show && (
					<Portal>
						<motion.div
							layout
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className={styles.overlay}
							onClick={onClick}
						>
							<motion.div
								initial={{x: '100%'}}
								animate={{x: 0}}
								exit={{x: '100%'}}
								transition={{ease: "easeOut", duration: 0.3}}
								className={classNames(styles.container, background.darkGray)}
							>
								<div className={styles.head}>
									<div className={color.peach}>
										logo
									</div>
									<Close className={styles.icon} onClick={onDismiss}/>
								</div>
								<ul className={styles.list}>
									{navigationMenu.map(el => {
										return (
											<MenuItem key={el.link} link={el.link} title={el.title}/>
										);
									})}
								</ul>
							</motion.div>
						</motion.div>
					</Portal>
				)
			}
		</AnimatePresence>
	);
};


