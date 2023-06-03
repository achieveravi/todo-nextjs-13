import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Card,
	CardBody,
	Checkbox,
	IconButton,
	Input,
} from '@chakra-ui/react';
import { useState } from 'react';

// 'use client';

export type Task = {
	_id: string;
	title: string;
	completed: boolean;
};

export type TodoProps = {
	task: Task;
	onDelete: (taskId: string) => void;
	onUpdate: (taskId: string, updatedTask: Task) => void;
};

const TodoItem = ({ task, onDelete, onUpdate }: TodoProps) => {
	console.log('Todo Item');
	const { title, completed } = task;
	const [isEditing, setIsEditing] = useState(false);
	const [titleValue, setTitleValue] = useState(title);
	const [taskCompleted, setTaskCompleted] = useState(completed);

	function deleteHandler() {
		onDelete(task._id);
	}

	function updateHandler(event: any) {
		if (event.target.type === 'checkbox') {
			setTaskCompleted(event.target?.checked);
		}
		onUpdate(task._id, {
			...task,
			title: titleValue,
			completed: taskCompleted,
		});
		setIsEditing(false);
	}
	return (
		<Card m={4}>
			<CardBody
				display={'flex'}
				alignItems={'center'}
				justifyContent={'stretch'}
				bgColor={taskCompleted ? 'green.200' : 'white.100'}
			>
				<Checkbox
					defaultChecked={taskCompleted}
					onChange={(e) => updateHandler(e)}
				></Checkbox>
				<Box ml={4} mr={4} w={'100%'}>
					{isEditing ? (
						<Input
							value={titleValue}
							onChange={(evt) => setTitleValue(evt.target.value)}
							onBlur={(e) => updateHandler(e)}
						></Input>
					) : (
						<label
							onClick={() => {
								setIsEditing(true);
								setTitleValue(title);
							}}
						>
							{titleValue}
						</label>
					)}
				</Box>
				<IconButton
					colorScheme='red'
					icon={<DeleteIcon />}
					aria-label='Delete Task'
					size={'lg'}
					onClick={() => deleteHandler()}
				>
					Delete
				</IconButton>
			</CardBody>
		</Card>
	);
};

export default TodoItem;
