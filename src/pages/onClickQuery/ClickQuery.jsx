import React from 'react';
import { usersapi } from '../../axios/axios.users';
import { useQuery } from '@tanstack/react-query';

let FetchUsersHandler = () => {
    return usersapi.get()
}

const ClickQuery = () => {

const {data,isLoading,error,isError,isFetching,refetch} = useQuery({
    queryKey: ["User"],
    queryFn: FetchUsersHandler,
enabled : false
})

if (isLoading || isFetching) {
    return <h1>Loading ..</h1>
}
if (isError) {
    return <h1>{error.message}</h1>
}

    return (
        <>
            <button onClick={refetch}>Fetch Data</button>
        <ul>
            {data?.data.map(user => {
                return (
                    <li key={user.id}>{user.name}</li>
                )
            })}
        </ul>
            </>
    );
}

export default ClickQuery;
