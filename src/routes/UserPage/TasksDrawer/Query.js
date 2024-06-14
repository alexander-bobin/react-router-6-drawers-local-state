import { useQuery } from "@tanstack/react-query";
import { getTasksByUserId } from "../../../common/api/task";

function UserTasksDrawerQuery ({ children, userId, loading }) {
  const { data, isLoading } = useQuery({ queryKey: ['tasks', userId], queryFn: () => getTasksByUserId(userId)})
  if (isLoading) return loading
  return children(data)
}

export default UserTasksDrawerQuery
