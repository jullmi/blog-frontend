import React from 'react';
import Link from "next/link";
import { Text } from "../../../../components/Text/Text";
import { MenuItemProps } from "./MenuItem.props";

export const MenuItem = ({link, title}: MenuItemProps) => {
	return (
		<li key={link}>
			<Link href={link}>
				<a>
					<Text color={'white'} size={'big'} lineHeight={'150'}>
						{title}
					</Text>
				</a>
			</Link>
		</li>
	);
};

