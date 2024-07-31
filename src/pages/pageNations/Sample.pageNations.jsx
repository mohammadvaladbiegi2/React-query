import { useState } from 'react'

import axios from 'axios'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

const fetchColors = pageNumber => {
    return axios.get(`https://fakestoreapi.com/products?limit=${pageNumber}`)
}

export const PaginatedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const { isLoading, isError, error, data, isFetching } = useQuery({
        queryKey: ['product', pageNumber],
        queryFn: () => fetchColors(pageNumber),

        placeholderData: keepPreviousData // keep data until get new data || isLoading just one time = true and for another requst just isfetching be === true

    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>
                {data?.data.map(color => {
                    return (
                        <div key={color.id}>
                            <h2>
                                {color.id}. {color.title}
                            </h2>
                        </div>
                    )
                })}
            </div>
            <div>
                <button
                    onClick={() => setPageNumber(page => page - 1)}
                    disabled={pageNumber === 1}>
                    Prev Page
                </button>
                <button
                    onClick={() => setPageNumber(page => page + 1)}
                    disabled={pageNumber === 5}>
                    Next Page
                </button>
            </div>
            {isFetching && 'Loading'}
        </>
    )
}