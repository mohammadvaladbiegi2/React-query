import React, { useEffect } from 'react';
import { usersapi } from '../../axios/axios.users';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = () => {
    return usersapi.get()
}
const fetchProduct = () => {
    return axios.get("https://66a29560967c89168f2090ca.mockapi.io/product")
}

const UsersProductPage = () => {

    const { data: Users } = useQuery({
        queryKey: ['User'],
        queryFn: fetchUsers
    })
    const { data: Products } = useQuery({
        queryKey: ['Product'],
        queryFn: fetchProduct
    })




    return (
        <div>
{/* Your JSX or UI */}
        </div>
    );
}

export default UsersProductPage;
