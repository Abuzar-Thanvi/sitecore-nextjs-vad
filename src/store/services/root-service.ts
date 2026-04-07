import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { SERVICE_TAGS } from 'constants/index'; //TODO: MAKE DYNAMIC
import config from 'temp/config';

const baseQuery = retry(
    fetchBaseQuery({
        baseUrl: config.apiHost,
    }),
    {
        maxRetries: 5,
    },
);

// initialize an empty api service that we'll inject endpoints into later as needed
export const rootService = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: SERVICE_TAGS,
    keepUnusedDataFor: 60,
    endpoints: () => ({}),
});
