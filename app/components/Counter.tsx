'use client';
import { useState } from 'react';
import Display from './Display';
import Incrementor from './Incrementor';
import TodoItem, { TodoProps } from './todo-item';

export default function Counter() {
	console.log('Render: <Counter />');
	const [count, setCount] = useState(0);
	return (
		<div>
			<Display count={count} />
			<Incrementor count={count} setCount={setCount} />
		</div>
	);
}
