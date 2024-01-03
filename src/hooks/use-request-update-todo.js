export const useRequestUpdateTodo = (refreshTodos) => {
	const requestUpdateTodo = (id, content = '') => {
		const cnangeTodo = prompt('Add new Todo', content);
		if (cnangeTodo) {
			fetch(`http://localhost:3004/todos/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					content: `${cnangeTodo}`,
				}),
			});
			alert('Todo is Changed');
			// refreshTodos();
		}
	};

	return {
		requestUpdateTodo,
	};
};
