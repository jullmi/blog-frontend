import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Menu from '../../public/icons/menu.svg';
import { Container } from "../../components/Container/Container";
import { cursorPointer, display, padding } from "../../styles/classes/classes";
import { navigationMenu } from "../../common/navigation-menu";
import { Text } from "../../components/Text/Text";
import Link from "next/link";
import classNames from "classnames";

export const Header = () => {

	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

	const menuClass = classNames(styles.menu, cursorPointer, display.flex);

	return (
		<Container className={padding.p16}>
			<div className={styles.container}>
				<div className={menuClass}>
					<Menu onClick={() => setIsOpenMenu(!isOpenMenu)}/>
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
	);
};


