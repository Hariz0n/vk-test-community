import { useQuery } from "@tanstack/react-query"
import { fetchGroups } from "../api/fetchGroups"

export const useGroups = () => {
  const fetchData = useQuery({queryKey: ['group'], queryFn: fetchGroups})
  return fetchData;
}