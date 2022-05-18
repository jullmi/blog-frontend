import type { NextPage } from 'next';
import { color } from "../styles/classes/classes";
import { PageLayout } from "../layout/PageLayout/PageLayout";

const Home: NextPage = () => {
	return (
		<PageLayout metaTitle={''} metaDescription={''}>
			<div>
				тут будет блог
			</div>
		</PageLayout>
	);
};

export default Home;
