'use client';
import { Box, Heading } from '@chakra-ui/react';
import TodoItem, { Task } from '../components/todo-item';

const todoUrl = 'http://localhost:8081/tasks';
async function getTasksList() {
	const response = await fetch(todoUrl, {
		next: { revalidate: 0 }, // To avoid any cache
	});
	return response.json();
}

async function updateTask(taskId: string, updatedTask: Task) {
	const response = await fetch(`${todoUrl}/${taskId}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: JSON.stringify(updatedTask),
	});

	return response.json();
}

async function deleteTask(taskId: string) {
	const response = await fetch(`${todoUrl}/${taskId}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
	});

	return response.json();
}
export default async function Todo() {
	const todos = await getTasksList();

	async function updateHandler(taskId: string, updatedTask: Task) {
		const response = await updateTask(taskId, updatedTask);
	}

	async function deleteHandler(taskId: string) {
		const response = await deleteTask(taskId);
	}
	return (
		<Box mt={10}>
			<Heading textAlign={'center'} mb={10}>
				My Tasks (Next JS)
			</Heading>
			{todos.map((todo: any) => (
				<TodoItem
					key={todo._id}
					task={...todo}
					onDelete={(taskId: string) => deleteHandler(taskId)}
					onUpdate={(taskId: string, updatedTask: Task) =>
						updateHandler(taskId, updatedTask)
					}
				/>
			))}
		</Box>
	);
}
