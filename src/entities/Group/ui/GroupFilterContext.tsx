import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { useGroups } from "../lib/useGroups";
import { UseQueryResult } from "@tanstack/react-query";
import { GroupResponseDto } from "../model/GroupResponseDto";
import { Group } from "..";

type GroupFilterContextType = {
  fetchData: UseQueryResult<GroupResponseDto, Error>;
  privateFilter: "all" | "opened" | "closed";
  setPrivateFilter: Dispatch<SetStateAction<"all" | "opened" | "closed">>;
  friendIncludeFilter: "all" | "friend" | "no-friend";
  setFriendIncludeFilter: Dispatch<
    SetStateAction<"all" | "friend" | "no-friend">
  >;
  outlineFilter: string | "all";
  setOutlineFilter: Dispatch<SetStateAction<string>>;
  filteredGroups: Group[]
};

const initialState: GroupFilterContextType = {
  fetchData: {} as GroupFilterContextType["fetchData"],
  privateFilter: "all",
  setPrivateFilter: () => {},
  friendIncludeFilter: "all",
  setFriendIncludeFilter: () => {},
  outlineFilter: "all",
  setOutlineFilter: () => {},
  filteredGroups: []
};

export const GroupFilterContext =
  createContext<GroupFilterContextType>(initialState);

export const GroupFilterContextWrapper: FC<PropsWithChildren> = ({
  children,
}) => {
  const fetchData = useGroups();
  const [privateFilter, setPrivateFilter] = useState<
    "all" | "opened" | "closed"
  >("all");
  const [friendIncludeFilter, setFriendIncludeFilter] = useState<
    "all" | "friend" | "no-friend"
  >("all");
  const [outlineFilter, setOutlineFilter] = useState("all");

  const filteredGroups = fetchData.data?.data?.filter((group) => {
    const isPrivatePassed =
      privateFilter === "all" ||
      (group.closed && privateFilter === "closed") ||
      (!group.closed && privateFilter === "opened");

    const isFriendIncluded =
      friendIncludeFilter === "all" ||
      (!group.friends?.length && friendIncludeFilter === "no-friend") ||
      (group.friends?.length && friendIncludeFilter === "friend");

    const outlineMatched = outlineFilter === 'all' || group.avatar_color === outlineFilter

    return isPrivatePassed && isFriendIncluded && outlineMatched;
  }) || [];

  return (
    <GroupFilterContext.Provider
      value={{
        fetchData,
        privateFilter,
        setPrivateFilter,
        friendIncludeFilter,
        setFriendIncludeFilter,
        outlineFilter,
        setOutlineFilter,
        filteredGroups
      }}
    >
      {children}
    </GroupFilterContext.Provider>
  );
};
