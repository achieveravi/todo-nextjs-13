export default function Incrementor(props: {
	count: number;
	setCount: (count: number) => void;
}) {
	console.log('Render: <Incrementor />');
	return (
		<button
			onClick={() => {
				console.log('Interaction: Increment');
				props.setCount(props.count + 1);
			}}
		>
			+1
		</button>
	);
}
