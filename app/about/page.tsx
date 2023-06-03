'use client';
import { Link } from '@chakra-ui/next-js';

export default function About() {
	return (
		<Link href='/about' color='green.400' _hover={{ color: 'blue.500' }}>
			About
		</Link>
	);
}
