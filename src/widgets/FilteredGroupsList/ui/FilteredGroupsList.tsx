import { GroupFilterContext } from "@/entities/Group";
import { GroupCard, GroupCardSkeleton } from "@/widgets/GroupCard";
import { useContext } from "react";

export const FilteredGroupsList = () => {
  const {
    fetchData: { isLoading },
    filteredGroups
  } = useContext(GroupFilterContext);

  

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {isLoading &&
        Array.from({ length: 6 }).map((_, i) => <GroupCardSkeleton key={i} />)}
      {filteredGroups?.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
};
