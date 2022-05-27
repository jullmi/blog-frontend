import React from 'react';
import { Container } from "../../../components/Container/Container";
import styles from './AboutMeHead.module.scss';

export const AboutMeHead = () => {
	return (
		<Container className={styles.container}>
			<div className={styles.photo__container}>
				<img src={'/photo.jpg'} alt={'devOps engineer'} className={styles.photo}/>
			</div>


		</Container>
	);
};
