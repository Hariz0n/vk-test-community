import { useGroups } from "@/entities/Group";
import { GroupCard, GroupCardSkeleton } from "@/widgets/GroupCard";
import { FC } from "react";

export const MainPage: FC = () => {
  const { data: groupData, isLoading } = useGroups();
  return (
    <main className="container grid my-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {isLoading &&
        Array.from({ length: 6 }).map((_, i) => <GroupCardSkeleton key={i} />)}
      {groupData?.data?.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </main>
  );
};
