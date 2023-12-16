import { useState } from 'react';
import styles from '../app.module.css';
import {
	useRequestGetTodos,
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestUpdateTodo,
} from '../hooks';

export const ToDoListsJSS = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [searchText, setSearchText] = useState('');

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { isLoading, todos, setTodos } = useRequestGetTodos(refreshTodosFlag);
	const { requestAddTodo } = useRequestAddTodo(refreshTodos);
	const { requestDeleteTodo } = useRequestDeleteTodo(refreshTodos);
	const { requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);

	const sortTodos = () => {
		const sortedTodos = [...todos].sort((a, b) => a.content.localeCompare(b.content));
		return setTodos(sortedTodos);
	};

	const searchTodos = () => {
		const filteredTodos = todos.filter((todo) => todo.content.includes(searchText));
		return filteredTodos;
	};

	return (
		<>
			<header id="xxx" className={styles.app}>
				<input
					className={styles.input}
					type="text"
					placeholder="Saerch by phrases..."
					value={searchText}
					onChange={(event) => setSearchText(event.target.value)}
				/>
				<button className={styles.button} onClick={sortTodos}>
					Sort by a-z
				</button>
				<button className={styles.button} onClick={requestAddTodo}>
					Add todo
				</button>
			</header>
			<div className={styles.app}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					searchTodos().map(({ id, content }) => (
						<div key={id} className={styles.list}>
							<div>{content}</div>
							<button className={styles.button} onClick={() => requestDeleteTodo(id)}>
								Delete
							</button>
							<button
								className={styles.button}
								onClick={() => requestUpdateTodo(id, content)}
							>
								Change
							</button>
						</div>
					))
				)}
			</div>
		</>
	);
};
