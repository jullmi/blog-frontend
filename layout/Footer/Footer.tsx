import React from 'react';
import { background } from "../../styles/classes/classes";
import { Text } from "../../components/Text/Text";
import { Container } from "../../components/Container/Container";
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<Container className={background.darkGray}>
			<Text color={'white'} size={'normal'} lineHeight={'150'} className={styles.text} asBlock>
				© 2022 тут лого, Inc.
			</Text>
		</Container>
	);
};

