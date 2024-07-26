import React from 'react';
import { usersapi } from '../../axios/axios.users';
import { useQuery } from '@tanstack/react-query';

let FetchUsersHandler = () => {
    return usersapi.get()
}

const GetQuery1 = () => {

const {data,isLoading,error,isError} = useQuery({
    queryKey: ["User"],
    queryFn: FetchUsersHandler,
   gcTime : 50000,   // catch Time
staleTime : 10000, // white this options we say dont need fetch data in background until this time
refetchOnMount: true, // if data be stale refetch agin data and if data be refresh dont fetch data until data be stale defult in this options is true if we select false data just one time fetch also can use always
refetchOnWindowFocus : true, // if data in DB change new data fetch wedout refresh page and default is true if set false even data change in DB just when refresh page refetch
// refetchInterval : 2000 // every 2 second reftech data and defuilt is false thise options more use for like price of coin like BTC 
})

if (isLoading) {
    return <h1>Loading ..</h1>
}
if (isError) {
    return <h1>{error.message}</h1>
}

    return (
        <ul>
            {data?.data.map(user => {
                return (
                    <li key={user.id}>{user.name}</li>
                )
            })}
        </ul>
    );
}

export default GetQuery1;
