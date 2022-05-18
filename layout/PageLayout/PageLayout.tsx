import React from 'react';
import { PageLayoutProps } from "./PageLayout.props";
import Head from "next/head";

export const PageLayout = ({metaDescription, metaTitle, children}: PageLayoutProps) => {
	return (
		<>
			<Head>
				<title>{metaTitle}</title>
				<meta name="description" content={metaDescription}/>
			</Head>
			{children}
		</>
	);
};

