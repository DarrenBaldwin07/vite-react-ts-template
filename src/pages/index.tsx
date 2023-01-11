import reactLogo from '../assets/react.svg';
import { Button } from '@chakra-ui/react';

function Home() {
	return (
		<div>
			<div>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<img src='/vite.svg' className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank' rel='noreferrer'>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<Button>Hello world</Button>
		</div>
	);
}

export default Home;
