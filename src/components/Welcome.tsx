import React from 'react'
import { Box, Button, Image, Center, Heading, VStack } from '@chakra-ui/react';
import CinciLogo from '../assets/CincinnatiVenturesRounded.png';
import { create } from 'zustand'


interface Counter {
  count: number;
  increaseCount: (by: number) => void
  resetCount: () => void
}

export const useStore = create<Counter>((set) => ({
  count: 0,
  increaseCount: (by: number) => set((state) => ({ count: state.count + by })),
  resetCount: () => set({ count: 0 }),
}));


const Welcome = () => {
  const { count, increaseCount } = useStore();
  return (
    <Box position='fixed' top='50%' left='50%' transform='translate(-50%, -50%)'>
      <Center>
        <VStack spacing={12} direction='column' align='center' justify='center' gap={2}>
          <Image shadow='lg' src={CinciLogo} alt='Cincinnati Ventures' />
          <Box>
            <Heading color='white'>Vite + React</Heading>

          </Box>
          <Button onClick={() => increaseCount(1)}>Count: {count}</Button>
        </VStack>
      </Center>
    </Box>
  )
}

export default Welcome
