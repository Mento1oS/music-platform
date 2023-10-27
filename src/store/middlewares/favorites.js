import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoritesApi = createApi({
    reducerPath: 'favoritesApi',
    tagTypes:['FavTracks'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/' }),
    endpoints: (build) => ({
      addSongToFavorites: build.mutation({
        query:({id, accessToken})=> ({
          url: `${id}/favorite/`,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        }),
        invalidatesTags:[{type: 'FavTracks', id: 'LIST'}]
      }),
      getFavoriteSongs: build.query({
        query:({accessToken})=>({
          url: `favorite/all/`,
          headers: {
          Authorization: `Bearer ${accessToken}`,
          }
        }),
        providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'FavTracks', id })),
              { type: 'FavTracks', id: 'LIST' },
            ]
          : [{ type: 'FavTracks', id: 'LIST' }],
      }),
      deleteSongFromFavorites: build.mutation({
        query:({id, accessToken})=> ({
          url: `${id}/favorite/`,
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        }),
        invalidatesTags:[{type: 'FavTracks', id: 'LIST'}]
      }),
      getAllTracks: build.query({
        query:()=>({
          url: "all/",
          headers: {"content-type": "application/json"}
        }),
        providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'FavTracks', id })),
              { type: 'FavTracks', id: 'LIST' },
            ]
          : [{ type: 'FavTracks', id: 'LIST' }],
      }),
      getAllTracksInitial: build.query({
        query:()=>({
          url: "all/",
          headers: {"content-type": "application/json"}
        })
      })
  }),
});

export const {useAddSongToFavoritesMutation, useGetFavoriteSongsQuery, useDeleteSongFromFavoritesMutation, useGetAllTracksQuery, useGetAllTracksInitialQuery} = favoritesApi;