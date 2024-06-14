import { useQueries } from "@tanstack/react-query"
import { getAlbumById } from "../../../common/api/album"
import { getPhotosByAlbumId } from "../../../common/api/photo"

function AlbumDrawerQuery ({ children, albumId, loading }) {
  const queryResults = useQueries({
    queries: [
      { queryKey: ['album', albumId], queryFn: () => getAlbumById(albumId)},
      { queryKey: ['album-photos', albumId], queryFn: () => getPhotosByAlbumId(albumId)}
    ]
  })
  const isLoading = queryResults.some(result => result.isLoading)
  if (isLoading) return loading
  const album = {
    ...queryResults[0].data,
    photos: queryResults[1].data
  }
  return children(album)
}

export default AlbumDrawerQuery
