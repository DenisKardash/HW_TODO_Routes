import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../app.module.css';
import { useParams } from 'react-router-dom';

import { useRequestDeleteTodo, useRequestUpdateTodo } from '../../hooks';

export const TodoPage = () => {
	const { requestDeleteTodo } = useRequestDeleteTodo();
	const { requestUpdateTodo } = useRequestUpdateTodo();

	const [todo, setTodo] = useState([]);

	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:3004/todos/${id}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTodo) => {
				if (loadedTodo.content === undefined) {
					navigate(`/404`);
				} else {
					setTodo(loadedTodo);
				}
			});
	}, [id, navigate]);

	return (
		<>
			<div className={styles.app}>
				<div className={styles.list}>{todo.content}</div>
			</div>
			<div className={styles.app}>
				<button className={styles.button} onClick={() => requestDeleteTodo(id)}>
					Delete
				</button>
				<button
					className={styles.button}
					onClick={() => requestUpdateTodo(id, todo.content)}
				>
					Change
				</button>
				<button className={styles.button}>
					<Link to="/" className={styles.button}>
						Back
					</Link>
				</button>
			</div>
		</>
	);
};
