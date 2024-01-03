import styles from '../../app.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRequestGetTodos, useRequestAddTodo } from '../../hooks';

export const MainPage = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [searchText, setSearchText] = useState('');

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { isLoading, todos, setTodos } = useRequestGetTodos(refreshTodosFlag);
	const { requestAddTodo } = useRequestAddTodo(refreshTodos);

	const sortTodos = () => {
		const sortedTodos = [...todos].sort((a, b) => a.content.localeCompare(b.content));
		return setTodos(sortedTodos);
	};

	const searchTodos = () => {
		const filteredTodos = todos.filter((todo) => todo.content.includes(searchText));

		return setTodos(filteredTodos);
	};

	return (
		<>
			<header className={styles.app}>
				<input
					className={styles.input}
					type="text"
					placeholder="Saerch by phrases..."
					value={searchText}
					onChange={(event) => setSearchText(event.target.value)}
				/>
				<button className={styles.button} onClick={searchTodos}>
					Search
				</button>
				<button className={styles.button} onClick={sortTodos}>
					A ▼
				</button>
				<button className={styles.button} onClick={requestAddTodo}>
					+
				</button>
			</header>
			<div className={styles.app}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					todos.map(({ id, content }) => (
						<div to={`/task/${id}`} key={id} className={styles.list}>
							<Link className={styles.todoList} to={`/task/${id}`}>
								{content}
							</Link>
						</div>
					))
				)}
			</div>
		</>
	);
};
