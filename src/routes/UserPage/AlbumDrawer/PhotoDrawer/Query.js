import { useQuery } from "@tanstack/react-query";
import { getPhotoById } from "../../../../common/api/photo";

function AlbumPhotoDrawerQuery ({ children, photoId, loading }) {
  const { data, isLoading } = useQuery({ queryKey: ['photo', photoId], queryFn: () => getPhotoById(photoId)})
  if (isLoading) return loading
  return children(data)
}

export default AlbumPhotoDrawerQuery
