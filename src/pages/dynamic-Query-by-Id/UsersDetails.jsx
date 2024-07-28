import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const UsersDetails = () => {

    const { id } = useParams()

    const { data,isError,isLoading } = useQuery({
        queryKey: ["User", id],
        queryFn: ({ queryKey }) => {
            const userid = queryKey[1]
            return axios.get(`https://66a29560967c89168f2090ca.mockapi.io/users/${userid}`)
        }
    })

    if (isLoading) {
        return <h1>Loading ..</h1>
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>
            {data?.data.name}
        </div>
    );
}

export default UsersDetails;
