import type { NextPage } from 'next';
import { Container } from "../components/Container/Container";
import { color } from "../styles/classes/classes";


const Home: NextPage = () => {
	return (
		<Container>
			<div className={color.white}>
				тут будет блог
			</div>
		</Container>
	);
};

export default Home;
