import { useEffect, useState } from 'react';
import styles from '../app.module.css';

export const OneToDoJSP = () => {
	const [todo, setTodo] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const rnd = (max) => {
			return Math.floor(Math.random() * max);
		};

		fetch(`https://jsonplaceholder.typicode.com/todos/${rnd(200)}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTodo) => setTodo(loadedTodo))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<div className={styles.app}>
				{isLoading ? <div className={styles.loader}></div> : <div>{todo.title}</div>}
			</div>
		</>
	);
};
