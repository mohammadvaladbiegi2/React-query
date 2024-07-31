import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';


const fetchUser = (id) => {
    return axios.get(`https://66a29560967c89168f2090ca.mockapi.io/users/${id}`)
}
const fetchProduct = (id) => {
    return axios.get(`https://66a29560967c89168f2090ca.mockapi.io/product/${id}`)
}

const Sample = () => {

    const userid = 1

const {data: user,isLoading: userload} =    useQuery({
    queryKey : ['user',userid],
    queryFn : () => fetchUser(userid)
})

let productid = user?.data.id


const {data,isLoading} =    useQuery({
    queryKey : ['product',userid],
    queryFn : () => fetchProduct(userid),
    enabled: !!productid
})

if(userload || isLoading){
    return <h1>Loading</h1>
}

    return (
       <h1>Sample Depend {data?.data.title}</h1>
    );
}

export default Sample;
