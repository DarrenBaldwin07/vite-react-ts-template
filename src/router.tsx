import { createBrowserRouter } from 'react-router-dom';
import Home from './pages';

// New router via react-router v6 -- more here: https://reactrouter.com/en/main/routers/create-browser-router
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

export default router;
