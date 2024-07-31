import React from 'react';
import { useRoutes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import GetQuery1 from './pages/Get/SimpleGetQuery1';
import Home from './pages/Home';
import ClickQuery from './pages/onClickQuery/ClickQuery';
import Callbacks from './pages/listen-to-changes/listen';
import TrasformData from './pages/Data-Transformation/TrasformData';
import UsersDetails from './pages/dynamic-Query-by-Id/UsersDetails';
import UsersProductPage from './pages/Parallel-Queries/users.product.page';
import DependentQueriesPage from './pages/Dependent-Queries/Sample';
import { PaginatedQueriesPage } from './pages/pageNations/Sample.pageNations';

const queryClient = new QueryClient()

const App = () => {
  let routs = useRoutes([ // routing in react :(
    { path: "/", element: <Home /> },
    { path: "/getquery1", element: <GetQuery1 /> },
    { path: "/clickquery", element: <ClickQuery /> },
    { path: "/callback", element: <Callbacks /> },
    { path: "/trasformdata", element: <TrasformData /> },
    { path: "/UsersDetails/:id", element: <UsersDetails /> },
    { path: "/parallel", element: <UsersProductPage /> },
    { path: "/dependentqueries", element: <DependentQueriesPage /> },
    { path: "/pagenations", element: <PaginatedQueriesPage /> },


  ])


  // thise is how provider React-query to all project
  return (
    <QueryClientProvider client={queryClient}>
      {routs}
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
