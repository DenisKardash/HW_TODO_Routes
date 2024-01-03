import { Routes, Route } from 'react-router-dom';

import { MainPage, TodoPage, NotFound } from '../pages';

export const ToDoListsJSS = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/task/:id" element={<TodoPage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/404" element={<NotFound />} />
			</Routes>
		</>
	);
};
