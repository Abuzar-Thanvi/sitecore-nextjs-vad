import { DemoState } from "store/reducers/demo/demo-slice";
import { rootService } from "store/services/root-service";
import config from "temp/config";

// Move types to a seperate types file, this is just for demo
export const demoApi = rootService.injectEndpoints({
    endpoints: builder => ({
        demoFetch: builder.query<DemoState, void>({
            query: () => ({
                url: config.FETCH_USER_COUNTRY,
                method: 'GET',
            }),
            providesTags: () => [{ type: 'Demo' }],
        }),
        demoPost: builder.mutation<any, any>({
            query: apiBody => ({
                url: config.SOLR_FAVORITE_SEARCH_API,
                method: 'POST',
                body: apiBody,
            }),
        }),
    }),
});

export const { useDemoFetchQuery, useDemoPostMutation } = demoApi;
