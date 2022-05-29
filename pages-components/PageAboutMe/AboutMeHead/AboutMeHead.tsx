import React from 'react';
import { Container } from "../../../components/Container/Container";
import styles from './AboutMeHead.module.scss';
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { Text } from "../../../components/Text/Text";

export const AboutMeHead = () => {
	return (
		<Container className={styles.container}>
			<div className={styles.container__head}>
				<div className={styles.photo__container}>
					<img src={'/photo.jpg'} alt={'devOps engineer'} className={styles.photo}/>
				</div>

				<PageTitle variant={'h1'} className={styles.title} weight={'regular'}>
					Привет,{'\n'} меня зовут Михаил, и&nbsp;я&nbsp;DevOps инженер
				</PageTitle>
			</div>

			<Text weight={'regular'} lineHeight={'150'} color={'gray'}>
				тут какой то небольшой текст надо вставить (где работаешь можно и так далее) на несколько строчек
			</Text>

		</Container>
	);
};
