import React from 'react';
import {
	Box,
	Button,
	Image,
	Center,
	Heading,
	VStack,
	Text,
	Flex,
  Link as ChakraLink
} from '@chakra-ui/react';
import CinciLogo from '../assets/CincinnatiVenturesRounded.png';
import { create } from 'zustand';
import { motion } from 'framer-motion';

interface Counter {
	count: number;
	increaseCount: (by: number) => void;
	resetCount: () => void;
}

export const useStore = create<Counter>((set) => ({
	count: 0,
	increaseCount: (by: number) =>
		set((state) => ({ count: state.count + by })),
	resetCount: () => set({ count: 0 }),
}));

const Welcome = () => {
	const { count, increaseCount } = useStore();
	return (
		<Box
			position='fixed'
			top='50%'
			left='50%'
			transform='translate(-50%, -50%)'
		>
			<Center>
				<VStack
					spacing={12}
					direction='column'
					align='center'
					justify='center'
					gap={2}
				>
					<motion.div
						animate={{ rotate: 360 }}
						transition={{
							repeat: Infinity,
							ease: 'linear',
							duration: 1,
						}}
					>
						<Image src={CinciLogo} alt='Cincinnati Ventures' />
					</motion.div>
					<Flex direction='column' align='center' gap={2}>
						<Heading color='white'>
							<Text as='span'	bgGradient='linear(to-l, #BD33FE, #6CB1FF)' bgClip='text'>Vite</Text> + <Text as='span' bgClip='text' bgGradient='linear(to-l, #A1E8FB, #61DAFB)' >React</Text>
						</Heading>
						<Text
							color='brand.lightGrey'
							w={400}
							textAlign='center'
						>
							A template for creating <Text as='span' fontWeight='bold'><ChakraLink href='https://cincinnati.ventures' target='_blank'>Cincinnati Ventures</ChakraLink></Text> {' '}
							client-rendered frontends!
						</Text>
					</Flex>
          <Flex direction='column' align='center' gap={4}>
            <Button rounded='xl' onClick={() => increaseCount(1)}>
              Count: {count}
            </Button>
            <Text color='brand.lightGrey'>
              Edit src/index.tsx and save to test HMR ⚡️
            </Text>
          </Flex>
				</VStack>
			</Center>
		</Box>
	);
};

export default Welcome;
