import { useNavigate } from 'react-router-dom';

export const useRequestDeleteTodo = () => {
	const navigate = useNavigate();

	const requestDeleteTodo = (id) => {
		const deleteTodo = window.confirm('Are you sure you want to delete TODO?');
		if (deleteTodo) {
			fetch(`http://localhost:3004/todos/${id}`, {
				method: `DELETE`,
			});
			alert('TODO --- is deleted');
			navigate('/');
		}
	};
	
	return {
		requestDeleteTodo,
	};
};
