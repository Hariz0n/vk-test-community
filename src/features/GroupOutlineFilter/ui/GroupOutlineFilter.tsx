import { GroupFilterContext } from "@/entities/Group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";
import { PaintBucket } from "lucide-react";
import { useContext } from "react";

export const GroupOutlineFilter = () => {
  const {
    outlineFilter,
    setOutlineFilter,
    fetchData: { isLoading, data },
  } = useContext(GroupFilterContext);

  const colors = [
    ...(data?.data
      ?.reduce((prev, curr) => {
        curr.avatar_color && prev.add(curr.avatar_color);
        return prev;
      }, new Set<string>())
      .values() || []),
  ];

  return (
    <Select
      disabled={isLoading}
      onValueChange={(value) =>
        setOutlineFilter(value as "all" | "friend" | "no-friend")
      }
      value={outlineFilter}
    >
      <SelectTrigger className="w-40">
        <PaintBucket className="h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Все</SelectItem>
        {colors.map((color, i) => (
          <SelectItem value={color} key={`${color}-${i}`}>
            {color}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
