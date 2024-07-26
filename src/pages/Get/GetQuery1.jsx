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
staleTime : 20000 // white this options we say dont need fetch data in background until this time
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
