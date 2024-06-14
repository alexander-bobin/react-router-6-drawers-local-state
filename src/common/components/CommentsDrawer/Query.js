import { useQuery } from "@tanstack/react-query"
import { getCommentsByPostId } from "../../../common/api/post"

function CommentsDrawerQuery ({ children, postId, loading }) {
  const { data, isLoading } = useQuery({ queryKey: ['comments', postId], queryFn: () => getCommentsByPostId(postId)})
  if (isLoading) return loading
  return children(data)
}

export default CommentsDrawerQuery
