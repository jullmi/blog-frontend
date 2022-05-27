import React from 'react';
import { PageLayoutProps } from "./PageLayout.props";
import Head from "next/head";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const PageLayout = ({metaDescription, metaTitle, children}: PageLayoutProps) => {
	return (
		<>
			<Head>
				<title>{metaTitle}</title>
				<meta name="description" content={metaDescription}/>
			</Head>
			<Header/>
			{children}
			<Footer/>
		</>
	);
};

