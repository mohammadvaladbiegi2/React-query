import {  useQuery } from '@tanstack/react-query';
import React from 'react';
import { usersapi } from '../../axios/axios.users';
let FetchUsersHandler = () => {
    return usersapi.get()
}
const TrasformData = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['User'],
        queryFn: FetchUsersHandler,
        select: (data) => { 
            const passwords = data.data.map(user => user.password) // a defualt value of data is whate we return in thise functions => FetchUsersHandler
            return passwords                                       // but white this options we can change value of data like this sample we return just passwords expact All info of Users
        }
 
    });

  

    if (isLoading) return <span>Loading...</span>;
    if (error) return <span>Error: {error.message}</span>;


    return (
       <ul>
        {data.map(passwords => (
            <li>{passwords}</li>
        ))}
       </ul>
    );
}

export default TrasformData;
