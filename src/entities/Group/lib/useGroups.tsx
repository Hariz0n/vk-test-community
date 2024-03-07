import { useQuery } from "@tanstack/react-query";
import { fetchGroups } from "../api/fetchGroups";

export const useGroups = () => {
  const fetchData = useQuery({
    queryKey: ["group"],
    queryFn: fetchGroups,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
  });
  return fetchData;
};
