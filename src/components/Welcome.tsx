import React from 'react';
import CinciLogo from '../assets/CincinnatiVenturesRounded.png';
import { motion } from 'framer-motion';
import { useStore } from '../stores';
import { Button, Heading, VStack, Tooltip } from '@rapid-web/ui';


const Welcome: React.FC = () => {
	const { count, increaseCount } = useStore();
	return (
		<div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<div className='flex flex-col items-center justify-center'>
				<VStack spacing='lg' styles='items-center'>
					<motion.div
						animate={{ rotate: 360 }}
						transition={{
							repeat: Infinity,
							ease: 'linear',
							duration: 1,
						}}
					>
						<img src={CinciLogo} alt='Cincinnati Ventures' />
					</motion.div>
					<Heading styles='mt-12 font-bold text-white'>{count}</Heading>
					<div className='flex items-center mt-12 space-x-4'>
						<Tooltip label='Rapid UI (CSS framework)'>
							<img width={56} height={56} alt='Rapid UI' src='https://storage.googleapis.com/cv-framework/rapidUIlogo.svg' />
						</Tooltip>
						<Tooltip label='React Router (client-side routing)'>
							<img width={56} height={56} alt='React Router' src='https://storage.googleapis.com/cv-framework/reactRouter.svg' />
						</Tooltip>
						<Tooltip label='React Query (data fetching)'>
							<img width={56} height={56} alt='React Query' src='https://storage.googleapis.com/cv-framework/reactQuery.svg' />
						</Tooltip>
						<Tooltip label='Zustand (global and local state management)'>
							<img width={56} height={56} alt='Zustand' src='https://storage.googleapis.com/cv-framework/zustand.png' />
						</Tooltip>
					</div>
					<Button styles='mt-12' onClick={() => increaseCount(1)}>Increase Count</Button>
				</VStack>
			</div>
		</div>
	);
};

export default Welcome;
