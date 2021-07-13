import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p class="text-green-500">This is the Home component.</p>
	</div>
);

export default Home;
