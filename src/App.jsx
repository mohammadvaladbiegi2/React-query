import React from 'react';
import { useRoutes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import GetQuery1 from './pages/Get/GetQuery1';
import Home from './pages/Home';

const queryClient = new QueryClient()

const App = () => {
  let routs = useRoutes([ // routing in react :(
    { path: "/", element: <Home /> },
    { path: "/getquery1", element: <GetQuery1 /> },
  ])


  // thise is how provider React-query to all project
  return (
    <QueryClientProvider client={queryClient}>
      {routs}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
