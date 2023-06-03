'use client';
import Image from 'next/image';
import Counter from './components/Counter';
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// // 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
// 	brand: {
// 		900: '#1a365d',
// 		800: '#153e75',
// 		700: '#2a69ac',
// 	},
// };

// export const theme = extendTheme({ colors });

export default async function Home() {
	return (
		// <ChakraProvider theme={theme}>
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Counter />
		</main>
		// </ChakraProvider>
	);
}
