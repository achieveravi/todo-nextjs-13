import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get('path');
	const res = await fetch(`http://localhost:8081${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const tasks = await res.json();

	return NextResponse.json({ tasks });
}
