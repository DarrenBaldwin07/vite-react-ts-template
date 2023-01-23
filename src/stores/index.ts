import { create } from 'zustand';

// This is where we want to defined all of our Zustand stores!

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
