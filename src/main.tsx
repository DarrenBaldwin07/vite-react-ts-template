import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={Router} />
		</QueryClientProvider>
	</React.StrictMode>,
);
