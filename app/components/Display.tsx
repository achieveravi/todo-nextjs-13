export default function Display(props: { count: number }) {
	console.log('Render: <Display />');
	return <div>Current Count: {props.count}</div>;
}
