import { useQuery } from "@tanstack/react-query"

export const UseUserQuery = () => { // Of course, you can modify, add, or remove any capabilities of React Query for this custom hook based on the needs of your project

    //Here, we have written just a few examples for illustration
    return useQuery({
        queryKey: ["User"],
        queryFn: FetchUsersHandler,
        gcTime: 50000,  // catche Time
        staleTime: 10000, // stale time
    })
}


//                 HOW TO USE


//1- first import the costom hook


//2- const {data,isLoading,error,isError} = UseUserQuery()