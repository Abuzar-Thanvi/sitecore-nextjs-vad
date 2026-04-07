import { useAppDispatch, useAppSelector } from 'lib/hooks/store.hooks';
import { useDemoFetchQuery, useDemoPostMutation } from 'src/store/services/demo/demo-api';
import { decrementCount, incrementCount, selectCount, selectFavorites } from 'src/store/reducers/demo/demo-slice';
import { JSX } from 'react';

type ReduxTestProps = {
  // define props here
};

const ReduxTest = (_: ReduxTestProps): JSX.Element => {
  const { data, error, isLoading, refetch, isFetching } = useDemoFetchQuery();
  const [demoPost] = useDemoPostMutation();
  const count = useAppSelector(selectCount);
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  const handleIncrement = () => { dispatch(incrementCount()) };
  const handleDecrement = () => { dispatch(decrementCount()) };
  const handleRefetch = () => { refetch() };
  const handleTriggerFavoritesMutation = () => {
    demoPost({
      "contentType": "favorites",
      "language": "en",
      "facetFields": [
        "filter_region",
        "plan_your_trip",
        "things_to_do",
        "what_to_see",
        "where_to_go",
        "global_business",
        "global_eventfilter",
        "others_website"
      ],
      "itemIDs": [
        "fa1cd9b1dbef418390abe57c7d43f5a9"
      ],
      "limit": -1,
      "offset": 0,
      "filters": [],
      "isPreviewMode": false
    })
  }

  if (isFetching) {
    return (
      <div>QUERY FETCHING</div>
    )
  }

  if (isLoading) {
    return (
      <div>QUERY LOADING</div>
    )
  }

  if (error) {
    return (
      <div>ERROR OCCURED WHILE LOADING QUERY DATA</div>
    )
  }

  return (
    <div style={{ border: '1px solid blue', borderStyle: 'dashed' }}>
      <h3>ReduxTest Atom Component</h3>
      <div>
        <button onClick={handleRefetch}>Refetch Query</button>
        <button onClick={handleTriggerFavoritesMutation}>Trigger Favorites Mutation</button>
        {
          data && (
            <div>
              <strong>Query Data from API:</strong>
              <span>
                Ip Address: {data?.ipAddress}
              </span>
              <span>
                city: {data?.city}
              </span>
              <span>
                country: {data?.country}
              </span>
            </div>
          )
        }
        {
          favorites.length > 0 ? (
            <div>
              <strong>Favorites Data from mutation:</strong>
              {
                favorites.map((f, i) => (<div>Favorite {i + 1}: {f.name}</div>))
              }
            </div>
          ) : (
            <div>No Favorites Mutation Data</div>
          )
        }
        <div><strong>Count:</strong> {count}</div><button onClick={handleIncrement}>+</button><button onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
};

export default ReduxTest;
