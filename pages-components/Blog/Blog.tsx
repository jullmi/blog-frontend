import React from 'react';
import { BlogProps } from "./Blog.props";
import { Container } from "../../components/Container/Container";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Badge } from "../../components/Badge/Badge";
import styles from './Blog.module.scss';
import classNames from "classnames";
import { background, noScrollbar } from "../../styles/classes/classes";

export const Blog = ({}: BlogProps) => {
	return (
		<>

			<Container>
				<PageTitle variant={'h1'}>Блог</PageTitle>
			</Container>

			<div className={classNames(styles.listContainer, background.darkGray, noScrollbar)}>
				<ol className={styles.list}>
					{
						rubrics.map(el => (
							<Badge key={el.id} type={'white'} href={el.href}>
								{el.title}
							</Badge>
						))
					}
				</ol>
			</div>

			тут статьи
		</>
	);
};

const rubrics = [
	{
		id: 1,
		title: 'Инструкции',
		href: ''
	},
	{
		id: 2,
		title: 'Терминал',
		href: ''
	},
	{
		id: 3,
		title: 'Информация',
		href: ''
	},
	{
		id: 4,
		title: 'Дистрибутивы',
		href: ''
	},
	{
		id: 5,
		title: 'Обзоры',
		href: ''
	}
];
