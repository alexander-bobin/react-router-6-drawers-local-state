import { useQuery } from "@tanstack/react-query"
import { getPostById } from "../../api/post"

function PostDrawerQuery ({ children, postId, loading }) {
  const { data, isLoading } = useQuery({ queryKey: ['post', postId], queryFn: () => getPostById(postId)})
  if (isLoading) return loading
  return children(data)
}

export default PostDrawerQuery
