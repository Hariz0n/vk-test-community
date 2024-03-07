import { GroupFilterContextWrapper } from "@/entities/Group";
import { GroupFriendIncludeFilter } from "@/features/GroupFriendIncludeFilter";
import { GroupOutlineFilter } from "@/features/GroupOutlineFilter";
import { GroupPrivacyFilter } from "@/features/GroupPrivacyFilter";
import { FilteredGroupsList } from "@/widgets/FilteredGroupsList";
import { FC } from "react";

export const MainPage: FC = () => {
  return (
    <main className="container my-6">
      <GroupFilterContextWrapper>
        <div className="mb-6 flex justify-end items-center gap-4">
          <GroupPrivacyFilter />
          <GroupFriendIncludeFilter />
          <GroupOutlineFilter />
        </div>
        <FilteredGroupsList />
      </GroupFilterContextWrapper>
    </main>
  );
};
