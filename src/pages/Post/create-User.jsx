import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';




const CreateUser = () => {

    let queryClient = useQueryClient()

    const [Data, setData] = useState({ name: '', password: '' });

    const { data: users, isLoading, isFetching } = useQuery({
        queryKey: ['Users'],
        queryFn: () => {
            return axios.get('https://66a29560967c89168f2090ca.mockapi.io/users')
        },
        placeholderData: keepPreviousData

    })

    const { mutate, isSuccess, isPending } = useMutation({
        mutationFn: () => {
            return axios.post('https://66a29560967c89168f2090ca.mockapi.io/users', Data)
        },
        onSuccess: (data) => {
            // queryClient.invalidateQueries(['Users']); 
            queryClient.setQueriesData(
                ['Users'],
                (oldData) => {
                    return {
                        ...oldData,
                        data: [...oldData.data, data.data]
                    }
                }
            )
        }

    })



    return (
        <div>
            <input type="text" placeholder='name' value={Data.name} onChange={(e) => setData(prev => {
                return { ...prev, name: e.target.value }
            })} />
            <input type="text" placeholder='password' value={Data.password} onChange={(e) => setData(prev => {
                return { ...prev, password: e.target.value }
            })} />

            <button
                onClick={mutate}
                disabled={isPending}
            >
                {isPending ? "wait😎😎" : 'Create Todo'}

            </button>
            <ul>
                {users?.data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            {isLoading  && <h1>Loading... 😒😒😒</h1>}
        </div>
    );
}

export default CreateUser;
