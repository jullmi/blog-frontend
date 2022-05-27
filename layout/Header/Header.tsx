import React, { useCallback, useState } from 'react';
import styles from './Header.module.scss';
import Menu from '../../public/icons/menu.svg';
import { Container } from "../../components/Container/Container";
import { cursorPointer } from "../../styles/classes/classes";
import { navigationMenu } from "../../common/navigation-menu";
import { Text } from "../../components/Text/Text";
import Link from "next/link";
import classNames from "classnames";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export const Header = () => {

	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

	const closeMenu = useCallback(() => {
		setIsOpenedMenu(false);
	}, []);

	const menuClass = classNames(styles.menu, cursorPointer);

	return (
		<>
			<Container className={styles.wrapper}>
				<div className={styles.container}>
					<div className={menuClass}>
						<Menu onClick={() => setIsOpenedMenu(!isOpenedMenu)} className={styles.icon}/>
					</div>
					<ul className={styles.list}>
						{navigationMenu.map(el => {
							return (
								<Link href={el.link} key={el.link}>
									<a>
										<Text color={'white'} size={'big'} asBlock hoverable className={cursorPointer}>
											{el.title}
										</Text>
									</a>
								</Link>
							);
						})}
					</ul>
				</div>
			</Container>
			<MobileMenu show={isOpenedMenu} onDismiss={closeMenu}/>
		</>
	);
};


