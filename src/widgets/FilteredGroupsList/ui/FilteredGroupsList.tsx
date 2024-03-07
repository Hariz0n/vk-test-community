import { GroupFilterContext } from "@/entities/Group";
import { GroupCard, GroupCardSkeleton } from "@/widgets/GroupCard";
import { ArrowDownUp, ShieldAlert } from "lucide-react";
import { useContext } from "react";

export const FilteredGroupsList = () => {
  const {
    fetchData: { isLoading, data },
    filteredGroups,
  } = useContext(GroupFilterContext);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {isLoading &&
        Array.from({ length: 6 }).map((_, i) => <GroupCardSkeleton key={i} />)}
      {filteredGroups?.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
      {!data?.data?.length && !isLoading && (
        <div className="flex flex-col col-span-3 mt-4 items-center">
          <ShieldAlert className="h-80 w-80 mb-4" />
          <span className="text-2xl">Группы не найдены</span>
        </div>
      )}
      {!filteredGroups.length && data?.data && !isLoading && (
        <div className="flex flex-col col-span-3 mt-4 items-center">
          <ArrowDownUp className="h-80 w-80 mb-4" />
          <span className="text-2xl max-w-96 text-center">Группы c текущими параметрами фильтрации не найдены</span>
        </div>
      )}
      {!filteredGroups.length}
    </div>
  );
};
