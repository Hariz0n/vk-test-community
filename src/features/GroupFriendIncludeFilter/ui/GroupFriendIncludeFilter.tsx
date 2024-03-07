import { GroupFilterContext } from "@/entities/Group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";
import { Handshake } from "lucide-react";
import { useContext } from "react";

export const GroupFriendIncludeFilter = () => {
  const {
    friendIncludeFilter,
    setFriendIncludeFilter,
    fetchData: { isLoading },
  } = useContext(GroupFilterContext);

  return (
    <Select
      disabled={isLoading }
      onValueChange={(value) =>
        setFriendIncludeFilter(value as 'all' | 'friend' | 'no-friend')
      }
      value={friendIncludeFilter}
    >
      <SelectTrigger className="w-40">
        <Handshake className="h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Все</SelectItem>
        <SelectItem value="friend">Есть друзья</SelectItem>
        <SelectItem value="no-friend">Нет друзей</SelectItem>
      </SelectContent>
    </Select>
  );
};
