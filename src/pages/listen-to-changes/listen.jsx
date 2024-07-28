import {  useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { usersapi } from '../../axios/axios.users';
let FetchUsersHandler = () => {
    return usersapi.get()
}
const Callbacks = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['User'],
        queryFn: FetchUsersHandler,
 
    });

    useEffect(() => {           //whis work like onSuccess and onError for manege you shoud writ conditions 
        if (data) {
            console.log('Data changed:', data);
        }
        
    }, [data]);

    if (isLoading) return <span>Loading...</span>;
    if (error) return <span>Error: {error.message}</span>;


    return (
        <h1>Call Back page</h1>
    );
}

export default Callbacks;
