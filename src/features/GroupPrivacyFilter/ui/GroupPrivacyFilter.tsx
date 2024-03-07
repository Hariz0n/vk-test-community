import { GroupFilterContext } from "@/entities/Group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";
import { Lock } from "lucide-react";
import { useContext } from "react";

export const GroupPrivacyFilter = () => {
  const {
    privateFilter,
    setPrivateFilter,
    fetchData: { isLoading },
  } = useContext(GroupFilterContext);

  return (
    <Select
      disabled={isLoading }
      onValueChange={(value) =>
        setPrivateFilter(value as "all" | "opened" | "closed")
      }
      value={privateFilter}
    >
      <SelectTrigger className="w-32">
        <Lock className="h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Все</SelectItem>
        <SelectItem value="opened">Открыт</SelectItem>
        <SelectItem value="closed">Закрыт</SelectItem>
      </SelectContent>
    </Select>
  );
};
