interface INavigationMenu {
	title: string;
	link: string;
}

export const navigationMenu: INavigationMenu[] = [
	{
		title: 'Блог',
		link: '/'
	},
	{
		title: 'Обо мне',
		link: '/about-me'
	}
];
