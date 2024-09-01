import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataVisApi = createApi({
	reducerPath: "dataVisApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
	endpoints: (builder) => ({
		getAllData: builder.query({
			query: ({country, category}) => `top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`,
		}),
	}),
});

export const { 
    useGetAllDataQuery
} = dataVisApi