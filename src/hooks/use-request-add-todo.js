export const useRequestAddTodo = (refreshTodos) => {
	const requestAddTodo = () => {
		const newTodo = prompt('Add new Todo');

		if (newTodo) {
			fetch(`http://localhost:3004/todos`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					content: `${newTodo}`,
				}),
			});
			alert('Todo is ADD');
			refreshTodos();
		}
	};

	return {
		requestAddTodo,
	};
};
