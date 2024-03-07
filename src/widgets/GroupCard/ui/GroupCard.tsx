import { Group, GroupAvatar } from "@/entities/Group";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  ScrollArea,
  declOfNum,
} from "@/shared";
import { Lock, Unlock, UserRound } from "lucide-react";
import { FC } from "react";

type GroupCardProps = {
  group: Group;
};

export const GroupCard: FC<GroupCardProps> = ({ group }) => {
  return (
    <Card>
      <CardHeader className="sm:flex-row space-y-0 items-center sm:items-start gap-4">
        <div className="relative sm:contents">
          <GroupAvatar src={"BAD_URL"} outline={group.avatar_color} />
          <div className="bg-muted sm:static sm:order-3 sm:p-0 sm:border-none sm:bg-transparent absolute rounded-full p-2 border-white border -top-2 -right-2">
            {group.closed ? <Lock /> : <Unlock />}
          </div>
        </div>
        <div className="flex-grow flex flex-col items-start gap-2">
          <CardTitle>{group.name}</CardTitle>
          <CardDescription>
            {group.members_count}{" "}
            {declOfNum(group.members_count, [
              "участник",
              "участника",
              "участников",
            ])}
          </CardDescription>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="p-0 h-[unset]">
                <CardDescription>
                  {group.friends?.length || "0"}{" "}
                  {declOfNum(group.friends?.length || 0, [
                    "друг",
                    "друга",
                    "друзей",
                  ])}
                </CardDescription>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent asChild>
              <ScrollArea>
                <div className="flex flex-col gap-2 max-h-36">
                  {(!group.friends || !group.friends.length) && (
                    <p className="line-clamp-2">Тут ваших друзей нет :(</p>
                  )}
                  {group.friends &&
                    group.friends.map((friend, index) => (
                      <div
                        key={`${friend.first_name}-${friend.last_name}-${index}`}
                        className="flex items-start gap-2"
                      >
                        <Avatar>
                          <AvatarImage src="USER AVATAR" />
                          <AvatarFallback>
                            <UserRound />
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p>{friend.first_name}</p>
                          <p>{friend.last_name}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </HoverCardContent>
          </HoverCard>
        </div>
      </CardHeader>
    </Card>
  );
};
