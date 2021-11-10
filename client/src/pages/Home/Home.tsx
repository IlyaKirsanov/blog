import React, { useState } from "react";
import styles from './Home.module.css';
import cn from "classnames";

const Home: React.FC = (): JSX.Element => {

	const [counter, setCounter] = useState<number>(0);

	return (
		<div>
			<h1
				className={cn(styles.title, {
					[styles.red]: counter > 2
				})}>Blogium</h1>
			<h3>{counter}</h3>
			<button onClick={() => setCounter(counter + 1)}>Click</button>
		</div>
	);
};

export default Home;
