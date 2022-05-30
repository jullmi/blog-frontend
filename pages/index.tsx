import type { NextPage } from 'next';
import { PageLayout } from "../layout/PageLayout/PageLayout";
import { Blog } from "../pages-components/Blog/Blog";

const Home: NextPage = () => {
	return (
		<PageLayout metaTitle={''} metaDescription={''}>
			<Blog/>
		</PageLayout>
	);
};

export default Home;
