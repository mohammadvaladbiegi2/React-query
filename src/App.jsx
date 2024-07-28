import React from 'react';
import { useRoutes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import GetQuery1 from './pages/Get/SimpleGetQuery1';
import Home from './pages/Home';
import ClickQuery from './pages/onClickQuery/ClickQuery';
import Callbacks from './pages/listen-to-changes/listen';
import TrasformData from './pages/Data-Transformation/TrasformData';

const queryClient = new QueryClient()

const App = () => {
  let routs = useRoutes([ // routing in react :(
    { path: "/", element: <Home /> },
    { path: "/getquery1", element: <GetQuery1 /> },
    { path: "/clickquery", element: <ClickQuery /> },
    { path: "/callback", element: <Callbacks /> },
    { path: "/trasformdata", element: <TrasformData /> },
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
